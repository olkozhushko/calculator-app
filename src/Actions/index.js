import { CHANGE_VALUE_IN_TAB, RESOLVE_EXPRESSION } from "./constants";

import calculator from "../js/calculatorMethods";
import filterText from "../js/filterText";

export const addValueToTab = (e, data) => {
  let target = e.target.closest(".buttons-box__button");
    if(!target) return;
    console.log("here", data);
    let text = e.target.textContent;
    text = filterText(data + text);

    return {
      type: CHANGE_VALUE_IN_TAB,
      data: text
    }
  
}

export const  addValueToTabFromInput = (e) => {
  
  console.log(e.target.value);
  let value = filterText(e.target.value);

  console.log(value);

  return {
    type: CHANGE_VALUE_IN_TAB,
    data: value
  }
}

export const resolveValue = (e, exp) => {
  if(e.currentTarget.tagName = "FORM") {
    e.preventDefault();
  }

  let value = calculator.evaluateWholeExpression(exp);

  return {
    type: RESOLVE_EXPRESSION,
    value
  }
}