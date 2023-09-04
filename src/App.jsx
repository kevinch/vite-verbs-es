import ReactGA from "react-ga4";
import Title from "./Title.jsx";
import Verb from "./Verb.jsx";
import Infos from "./Infos.jsx";
import "./App.css";

ReactGA.initialize("G-JX6TWLKLDD");

function App() {
  return (
    <>
      <Title />
      <Verb />
      <Infos />
    </>
  );
}

export default App;
