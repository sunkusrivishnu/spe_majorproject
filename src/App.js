import { Routes, Route } from "react-router-dom";
import Teamname from "./pages/teamname/Teamname";
import Numovers from "./pages/numovers/Numovers";
import Tossnbatting from "./pages/tossnbatting/Tossnbatting";
import Scorecard from "./pages/scorecard/Scorecard";

function App() {
  return (

    <Routes>

      <Route path="/" element={<Teamname />}/>
      <Route path="numovers" element={<Numovers/>} />
      <Route path="numovers/batting" element={<Tossnbatting/>}/>
      <Route path="numovers/batting/scorecard" element={<Scorecard/>}/>

    </Routes>

  );
}

export default App;
