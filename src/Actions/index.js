import { CHANGE_VALUE_IN_TAB, RESOLVE_EXPRESSION } from "./constants";

import calculator from "../js/calculatorMethods";
import filterText from "../js/filterText";

export const addValueToTab = (e, data) => {
  
  let target = e.target.closest(".buttons-box__button");
    if(!target) return;
    
    let text = e.target.textContent;
    text = filterText(data + text);

    return {
      type: CHANGE_VALUE_IN_TAB,
      data: text
    }
  
}

export const  addValueToTabFromInput = (e) => {
  
  let value = filterText(e.target.value);

  return {
    type: CHANGE_VALUE_IN_TAB,
    data: value,
    ansField: true
  }
}

export const resolveValue = (e, exp) => {
  console.log(e.currentTarget);
  if(e.currentTarget.tagName === "FORM") {
    e.preventDefault();
  }
  
  console.log("here-resolve");
  if(e.currentTarget.closest(".equal")) {
    e.stopPropagation();
  }

  let value = calculator.evaluateWholeExpression(exp);

  return {
    type: RESOLVE_EXPRESSION,
    value
  }
}