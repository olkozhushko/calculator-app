export const changeValue = (store, data) => {
    
  const oper = ["%", "+", "-", "*", "/", "."];

  let count = store.getState().isExpressionResolved ? +store.getState().switchedCount + 1 : store.getState().switchedCount;

  let lastEnteredValue = data[data.length-1];
  let value;
  
  //check for if the value entered after the expression resolving is one of the operators. If this is not so that field would be cleared and entered new value in there or if this is a case then we can proceed adding operation to resolved value

  if(!oper.includes(lastEnteredValue)) {
    value = count > 0 && count % 2 === 0 && store.getState().isExpressionResolved ?  lastEnteredValue : data;
  } else {
    value = count > 0 && count % 2 === 0 && store.getState().isExpressionResolved ?
    store.getState().resolvedValue + lastEnteredValue : data;
  }

  return {value, count};
}