/* global GLOBAL_CONFIG */

import React, { useReducer } from "react";
import { Dropdown } from "../Components/Dropdown";
import { ResultBox } from "../Components/ResultBox";
import "./App.css";
import { AppContext, AppReducer, initialState } from "./AppReducer";

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const users =
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Dropdown userElements={["A3EOW5FHKR3Q0S", "A3NN5C3GINHYHL"]} itemElements={null} />
        <ResultBox userID={state.userID} itemID="" />
        <Dropdown userElements={null} itemElements={["B0013XWDGC_0", "B01EUTM45A_0"]} />
        <ResultBox userID="" itemID={state.itemID}/>
        {console.log("selected", state.userID)}
      </div>
    </AppContext.Provider>

  );
};

export default App;
