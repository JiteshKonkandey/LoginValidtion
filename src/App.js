import React from "react";
import CreateAccountIndex from "./Components/index";
import SvgSandbox from "./Components/SvgSandbox";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.scss";

const App = () => { 


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<CreateAccountIndex />}></Route>
    <Route exact path="/data" element={<SvgSandbox />}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
