import { EthProvider } from "./contexts/EthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth";
import Home from "./components/Home";
import React from "react";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
        <Router>
          <Routes>
            <Route path="" element={<Auth />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </Router>
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
