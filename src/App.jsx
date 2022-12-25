import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CPSTest from "./pages/cps/CPSTest";
import Home from "./pages/home/Home";
import NetworkTest from "./pages/network/NetworkTest";
import ReactionTest from "./pages/reaction/ReactionTest";
import Suggestion from "./pages/suggestion/Suggestion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/network" element={<NetworkTest />} />
        <Route path="/cps" element={<CPSTest />} />
        <Route path="/reaction" element={<ReactionTest />} />
      </Routes>
    </Router>
  );
}

export default App;
