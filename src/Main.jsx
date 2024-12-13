import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/main.css";
// import { ThemeProvider } from "@mui/material";
// import Theme from "./Theme";

const root = createRoot(document.getElementById("root")).render(
  <>
    {/* <ThemeProvider theme={Theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </>
);
