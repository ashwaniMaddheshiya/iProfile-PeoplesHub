import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const callBackFunction = (childData) => {
    setIsLogin(childData);
  }

  const homeResHandler = (homedata) => {
    setIsLogin(homedata);
  }

  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={isLogin ? <Navigate replace to="/home" /> : <Login parentCallback={callBackFunction}/>} />
        <Route exact path="/home" element={isLogin ? <Home onHomeRes = {homeResHandler} /> : <Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
