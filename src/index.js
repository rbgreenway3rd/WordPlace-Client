import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { WordPlace } from "./components/WordPlace";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WordPlace />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
