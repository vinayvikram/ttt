import ReactDOM from "react-dom";
import "./index.css";
import StartPage from "./routes/startPage";
import GamePage from "./routes/gamePage";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <div>
    <StartPage />
    <GamePage mode={0} />
  </div>,
  document.getElementById("root")
);
