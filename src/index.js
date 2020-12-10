import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// Have removed StrictMode to get around findDOMNode being deprecated in StrictMode so I can keep the console nice and clear
// https://github.com/react-component/slider/issues/613 - in real life, removing it shouldn't be a solution as it helps with
// identifying components with unsafe lifecycles, warns about various API items usage and deprecations, detects unexpected side effects, etc
