import { CHANGE_VALUE_IN_TAB, RESOLVE_EXPRESSION } from "../Actions/constants";

const initialState = {
  enteredValue: "0",
  expressionToEval: "",
  isExpressionResolved: false,
  resolvedValue: ""
}

const appReducer = (state=initialState, action) => {
  switch(action.type) {
    case CHANGE_VALUE_IN_TAB:
      console.log("in")
      return {
        ...state,
        enteredValue: action.data,
      }
    case RESOLVE_VALUE:
      return {
        ...state,
        isValShown: !state.isValShown,
      }
    case RESOLVE_EXPRESSION:
      return {
        valueToEval: state.enteredValue,
        enteredValue: action.data,
        isValShown: !state.isValShown
      }
    default:
      return state;
  }
}

export default appReducer;