import { CHANGE_VALUE_IN_TAB, RESOLVE_EXPRESSION,  CLEAN_FIELD, DELETE_ONE_A_TIME} from "./constants";

import calculator from "../js/calculatorMethods";
import filterText from "../js/filterText";
import store from "../Store/index";
import { changeValue } from "../Actions/actionHelperFunction";

export const addValueToTab = (e, data) => {
  console.log("state", store.getState());

  let target = e.target.closest(".buttons-box__button");
    if(!target) return;
    
    let text = e.target.textContent;
    text = filterText(data + text);

    let params = changeValue(store, text);

    return {
      type: CHANGE_VALUE_IN_TAB,
      data: params.value,
      count: params.count
    }
  
}

export const  addValueToTabFromInput = (e) => {
  
  let value = filterText(e.target.value);
  value = value === "" ? 0 : value;

  let params = changeValue(store, value);

  return {
    type: CHANGE_VALUE_IN_TAB,
    data: params.value,
    count: params.count
  }
}

export const resolveValue = (e, exp) => {
  const oper = ["%", "+", "-", "*", "/", "."];
  let value;

  if(e.currentTarget.tagName === "FORM") {
    e.preventDefault();
  }
  
  if(e.currentTarget.closest(".button-equal")) {
    e.stopPropagation();
  }
  
  if(oper.includes(exp[exp.length -1])) {
    value = exp;
  } else {
    value = calculator.evaluateWholeExpression(exp);
  }

  return {
    type: RESOLVE_EXPRESSION,
    value
  }
}

export const cleanBarField = (e) => {
  e.stopPropagation();
  
  return {
    type: CLEAN_FIELD
  }
}

export const deleteCharacter = (e) => {
  e.stopPropagation();

  return {
    type: DELETE_ONE_A_TIME
  }
}