import { CHANGE_VALUE_IN_TAB, RESOLVE_EXPRESSION } from "../Actions/constants";

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
      let count = state.isExpressionResolved ? +state.switchedCount + 1 : state.switchedCount;
      console.log(count);
      let value = count > 0 && count % 2 === 0 && state.isExpressionResolved ? action.data[action.data.length-1] : action.data;

      return {
        ...state,
        enteredValue: value,
        isAnsFieldShownRes: true,
        isExpressionResolved: false,
        switchedCount: count
      }
    case RESOLVE_EXPRESSION:
      let num = !state.isExpressionResolved ? +state.switchedCount + 1 : state.switchedCount;
      
      return {
        ...state,
        resolvedValue: action.value,
        isExpressionResolved: true,
        expressionToEval: state.enteredValue,
        switchedCount: num
      }
    default:
      return state;
  }
}

export default appReducer;