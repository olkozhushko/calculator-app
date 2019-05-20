import React from 'react';
import { Provider } from "react-redux";

import store from "../../Store";
import './App.scss';
import InputData from "../InputData/inputData";
import ButtonsContainer from "../ButtonContainer/ButtonsContainer";

const App = () => {
    
  return (
    <div className="calculator-wrapper calculator">
      <InputData />
      <ButtonsContainer />
    </div>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
