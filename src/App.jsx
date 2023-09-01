import ReactGA from "react-ga4";
import Title from "./Title.jsx";
import Verb from "./Verb.jsx";
import Infos from "./Infos.jsx";
import "./App.css";

ReactGA.initialize("405101340");

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
