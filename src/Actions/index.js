import { CHANGE_VALUE_IN_TAB, RESOLVE_EXPRESSION,  CLEAN_FIELD, DELETE_ONE_A_TIME} from "./constants";

import calculator from "../utils/calculatorMethods";
import filterText from "../utils/filterText";
import store from "../Store/index";
import { changeValue, examDelCharacter, resolveExpression } from "../Actions/actionHelperFunction";

export const addValueToTab = (e, data) => {

  let target = e.target.closest(".buttons-box__button");
    if(!target) return {type: ""};
    
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
  
  let params = resolveExpression(store.getState(), value);
  console.log(params);

  return {
    type: RESOLVE_EXPRESSION,
    value,
    count: params.num,
    isLastValHasParam: params.isLastVal
  }
}

export const cleanBarField = (e) => {
  e.stopPropagation();

  let oldState = store.getState();

  let num = oldState.isExpressionResolved ? +oldState.switchedCount + 1 : oldState.switchedCount;
  
  return {
    type: CLEAN_FIELD,
    count: num
  }
}

export const deleteCharacter = (e) => {
  e.stopPropagation();

  let value = examDelCharacter(store.getState());

  return {
    type: DELETE_ONE_A_TIME,
    value
  }
}