import ReactDOM from "react-dom";
import "./index.css";
import { FirstModeGame, SecondModeGame } from "./routes/gamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstModeGame />} />
      <Route path="/1" element={<SecondModeGame />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
