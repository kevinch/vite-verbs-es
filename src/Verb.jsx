import { useState } from "react";
import mixpanel from "mixpanel-browser";

import TableFirstBloc from "./TableFirstBloc";
import VerbTense from "./VerbTense";
import Persons from "./Persons";

const isProd = window.location.hostname !== "localhost";

export default function Verb() {
  const [filename, setFilename] = useState("");
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedFilename = filename.toLowerCase();
    const firstLetter = cleanedFilename.split("")[0];

    if (cleanedFilename !== "") {
      setState({ status: "loading", data: null, error: null });

      import(`./verbos/${firstLetter}/${cleanedFilename}@rae.json`)
        .then((data) => {
          isProd &&
            mixpanel.track("Form reception", {
              success: true,
            });
          setState({ status: "success", data, error: null });
        })
        .catch((error) => {
          isProd &&
            mixpanel.track("Form reception", {
              success: false,
            });
          setState({ status: "error", data: null, error });
        });
    }

    if (isProd) {
      mixpanel.track("Form submit", {
        word: cleanedFilename,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            autoFocus
            style={{ padding: "10px 20px", fontSize: "22px" }}
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            placeholder="type & enter…"
          />
        </label>
      </form>

      {state.status === "loading" && <div>Loading…</div>}
      {state.status === "error" && <div>Not found</div>}

      {state.status === "success" && (
        <div>
          <h1
            style={{
              fontWeight: "normal",
              fontSize: "4em",
              marginBottom: "14px",
            }}
          >
            {state.data.word}
          </h1>
          <div className="base-tenses">
            <span className="def">Infinitivo:</span>{" "}
            <b>{state.data.infinitivo}</b> {" - "}
            <span className="def">Gerundio:</span> <b>{state.data.gerundio}</b>{" "}
            {" - "}
            <span className="def">Participio:</span>{" "}
            <b>{state.data.participio}</b>
          </div>

          <div className="tense-wrapper">
            <h2>Indicative</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ color: "#666" }}>
                <TableFirstBloc />
                <Persons />
              </div>

              <VerbTense data={state.data.tenses[3]} title="Present" />
              <VerbTense data={state.data.tenses[4]} title="Preterite" />
              <VerbTense data={state.data.tenses[5]} title="Imperfect" />
              <VerbTense data={state.data.tenses[6]} title="Conditional" />
              <VerbTense data={state.data.tenses[7]} title="Future" />
            </div>
          </div>

          <div className="tense-wrapper">
            <h2>Subjective</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ color: "#666" }}>
                <TableFirstBloc />
                <Persons />
              </div>

              <VerbTense data={state.data.tenses[8]} title="Present" />
              <VerbTense data={state.data.tenses[9]} title="Imperfect" />
              <VerbTense data={state.data.tenses[10]} title="Imperfect 2" />
              <VerbTense data={state.data.tenses[11]} title="Future" />
            </div>
          </div>

          <div className="tense-wrapper">
            <h2>Imperative</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ color: "#666" }}>
                <TableFirstBloc />
                <Persons isImperative />
              </div>

              <VerbTense
                data={state.data.tenses[12]}
                title="Affirmative"
                isImperative
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
