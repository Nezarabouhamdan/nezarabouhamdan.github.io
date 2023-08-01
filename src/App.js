import "./App.css";

import { BrowserRouter, Switch, Rotue, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Globalstyle } from "./Globalstyles";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import "./fonts/style.css";
function App() {
  return (
    <BrowserRouter>
      {" "}
      <Globalstyle />
      <Navbar />
      <switch>
        <Route exact path={"/portofolio"} component={Home} />
      </switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
