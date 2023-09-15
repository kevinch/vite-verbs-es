import mixpanel from "mixpanel-browser";

import Title from "./Title.jsx";
import Verb from "./Verb.jsx";
import Infos from "./Infos.jsx";
import "./App.css";

mixpanel.init("42156230ace6caaaced26b29ebac0db0", {
  debug: false,
  track_pageview: true,
  persistence: "localStorage",
});

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
