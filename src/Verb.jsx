import React, { useState } from "react";

import TableFirstBloc from "./TableFirstBloc";
import VerbTense from "./VerbTense";
import Persons from "./Persons";

export default function Verb() {
  const [filename, setFilename] = React.useState("");
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstLetter = filename.split("")[0];

    if (filename !== "") {
      setState({ status: "loading", data: null, error: null });

      import(`./verbos/${firstLetter}/${filename}@rae.json`)
        .then((data) => {
          setState({ status: "success", data, error: null });
        })
        .catch((error) => {
          setState({ status: "error", data: null, error });
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            style={{ padding: "10px 20px", fontSize: "22px" }}
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
        </label>
      </form>

      {state.status === "loading" && <div>Loading...</div>}
      {state.status === "error" && <div>Not found</div>}
      {state.status === "success" && (
        <div>
          <h1 style={{ fontWeight: "normal" }}>{state.data.word}</h1>
          <div>
            <span className="def">Infinitivo:</span> {state.data.infinitivo}{" "}
            {" - "}
            <span className="def">Gerundio:</span> {state.data.gerundio} {" - "}
            <span className="def">Participio:</span> {state.data.participio}
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
                {/* {persons.map(
                  (el, i) => i !== 0 && <div key={nanoid()}>{el}</div>
                )} */}
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