import { RouterProvider } from "react-router-dom";
import "./App.css";
// import "./Fonts/WEB/css/clash-display.css";
import "./Fonts/WEB/css/clash-display.css";
import { router } from "./Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
