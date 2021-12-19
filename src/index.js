import ReactDOM from "react-dom";
import "./index.css";
import StartPage from "./routes/startPage";
import GamePage from "./routes/gamePage";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/ttt/" element={<StartPage />} />
      <Route path="/ttt/play/0" element={<GamePage mode={0} />} />
      <Route path="/ttt/play/1" element={<GamePage mode={1} />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
