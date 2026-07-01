import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/menu"
        element={<Menu />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/gallery"
        element={<Gallery />}
      />

    </Routes>
  );
}

export default App;