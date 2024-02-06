import BmiCalculator from "./Components/BmiCalculator";
import NavbarDiv from "./Components/NavbarDiv";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/about"
            index
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/"
            index
            element={
              <>
                <Home />
              </>
            }
          />

          <Route
            path="/vedu"
            index
            element={
              <>
                <BmiCalculator />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
