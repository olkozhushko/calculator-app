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
      return cleanField(state, action);
    case DELETE_ONE_A_TIME:
      return deleteCharacter(state, action);
    default:
      return state;
  }
}

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

  if(action.isLastValHasParam) {
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
    switchedCount: action.count
  }
}

function cleanField(oldState, action) {

  return {
    ...oldState,
    enteredValue: "0",
    isExpressionResolved: false,
    switchedCount: action.count
  }
}


function deleteCharacter(oldState, action) {
  return {
    ...oldState,
    enteredValue: action.value
  }
}



export default appReducer;