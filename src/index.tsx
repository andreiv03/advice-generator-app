import React from "react";
import ReactDOM from "react-dom/client";

import "styles/globals.scss";
const Advice = React.lazy(() => import("components/advice"));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Advice />
  </React.StrictMode>
);
