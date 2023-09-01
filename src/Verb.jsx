import React, { useState } from "react";

export default function Verb() {
  const [filename, setFilename] = React.useState("");
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");

    if (filename !== "") {
        setState({ status: "loading", data: null, error: null });
  
        import(`./verbos/n/${filename}@rae.json`)
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
          verb:
          <input
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>

      {state.status === "loading" && <div>Loading...</div>}
      {state.status === "error" && <div>Not found</div>}
      {state.status === "success" && (
        <div>
          {state.data.tenses[3].map((el) => (
            <div key={el}>{el[0]}</div>
          ))}
        </div>
      )}
    </div>
  );
}
