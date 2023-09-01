// import { useState } from "react";
import "./App.css";
import Title from "./Title.jsx";
import Verb from "./Verb.jsx";

function App() {
//   const [open, setOpen] = useState(false);

  return (
    <>
      <Title />

      <div className="card">
        <div>
          {/* <input /> */}
          {/* <button onClick={() => !open && setOpen(true)}>Load</button> */}
        </div>

        <Verb />
      </div>
    </>
  );
}

export default App;
