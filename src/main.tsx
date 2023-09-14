import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AudioTest from "./AudioTest.tsx";

if (window.location.pathname === "/") {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else if (window.location.pathname === "/audio-test") {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <AudioTest />
    </React.StrictMode>
  );
}
