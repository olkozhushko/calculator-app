import { CHANGE_VALUE_IN_TAB, RESOLVE_EXPRESSION, CLEAN_FIELD, DELETE_ONE_A_TIME} from "../Actions/constants";

const initialState = {
  enteredValue: "0",
  expressionToEval: "",
  isExpressionResolved: false,
  switchedCount: 0,
  resolvedValue: "0",
  isAnsFieldShownRes: false
}

const appReducer = (state=initialState, action) => {
  switch(action.type) {
    case CHANGE_VALUE_IN_TAB:
      return changeValue(state, action);
    case RESOLVE_EXPRESSION:
      return resolveExpression(state, action)
    case CLEAN_FIELD:
      return cleanField(state);
    case DELETE_ONE_A_TIME:
      return deleteCharacter(state);
    default:
      return state;
  }
}

const oper = ["%", "+", "-", "*", "/", "."];

function changeValue(oldState, action) {
  
  return {
    ...oldState,
    enteredValue: action.data,
    isAnsFieldShownRes: true,
    isExpressionResolved: false,
    switchedCount: action.count
  }
}

function resolveExpression(oldState, action) {
  let num = !oldState.isExpressionResolved ? +oldState.switchedCount + 1 : oldState.switchedCount;
  
  let lastVal = action.value[action.value.length - 1];

  if(oper.includes(lastVal)) {
    return {
      ...oldState,
      enteredValue: action.value
    }
  }
      
  return {
    ...oldState,
    resolvedValue: action.value,
    isExpressionResolved: true,
    expressionToEval: oldState.enteredValue,
    switchedCount: num
  }
}

function cleanField(oldState) {
  let num = oldState.isExpressionResolved ? +oldState.switchedCount + 1 : oldState.switchedCount;

  return {
    ...oldState,
    enteredValue: "0",
    isExpressionResolved: false,
    switchedCount: num
  }
}


function deleteCharacter(oldState) {
  let value = oldState.enteredValue;
  
  if(value.length > 1) {
    value = value.slice(0, value.length - 1);
  } else {
    value = "0";
  }
  
  return {
    ...oldState,
    enteredValue: value
  }
}



export default appReducer;