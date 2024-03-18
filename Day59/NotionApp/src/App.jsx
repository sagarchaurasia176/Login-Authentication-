import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import React, { useState } from "react";

//context api data pass
import dataPass from "./Context/Log";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {/* nav components */}
      <div className=" container w-full  text-white">
        <dataPass.Provider value={{ isLoggedIn, setLoggedIn }}>
          <Header />

          {/* THIS IS THE ROUTES CONCEPTS */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
          </Routes>
        </dataPass.Provider>
        {/* passing the props here */}
      </div>
    </>
  );
}

export default App;
