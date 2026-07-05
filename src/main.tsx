import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./index.css";

const root = document.getElementById("root")!;

if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
