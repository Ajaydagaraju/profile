import React from "react";
import "./App.css";
import Body from "./Components/CusotmHooks/Body";

import Profile from "./Components/CusotmHooks/Profile";

const App = () => {
  

  return (
    <div className="App bg-primary p-2">

    <div className=" container bg-light shadow-l ">
     

    <Profile />
    <Body/>

   
    </div>
    </div>
  );
};

export default App;


