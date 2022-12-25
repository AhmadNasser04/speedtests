import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CPSTest from "./pages/cps/CPSTest";
import Home from "./pages/home/Home";
import NetworkTest from "./pages/network/NetworkTest";
import ReactionTest from "./pages/reaction/ReactionTest";
import Suggestion from "./pages/suggestion/Suggestion";
import WPMTest from "./pages/wpm/WPMTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/network" element={<NetworkTest />} />
        <Route path="/cps" element={<CPSTest />} />
        <Route path="/reaction" element={<ReactionTest />} />
        <Route path="/wpm" element={<WPMTest />} />
      </Routes>
    </Router>
  );
}

export default App;
