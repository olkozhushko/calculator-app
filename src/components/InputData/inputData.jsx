import React from "react";
import { connect } from "react-redux";

import "./inputData.scss";

import { addValueToTabFromInput, resolveValue } from "../../Actions/index";

const InputData = ({ inputValue, onChange, expressionToEval, isExprResolved, resolvedValue, onSubmit, isAnsFieldShown}) => {

  let ansField = isAnsFieldShown ? `Ans = ${resolvedValue}` : "";

  ansField = isExprResolved ? `${expressionToEval} = ` : ansField;
  inputValue = isExprResolved ? resolvedValue : inputValue;

  return (
    <div className="enterbar-container">

      <div className="enterbar-data-wrapper">
        <span className="enterbar-data">{ansField}</span>
      </div>

      <form 
        action="" 
        className={`input-data`}
        autoComplete="off"
        onSubmit={(e) => onSubmit(e, inputValue)}
        >
        <label htmlFor="data" />
        <input
          type="text"
          name="data"
          id="data"
          value={inputValue}
          onChange={onChange}
          className="input-data__input"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.enteredValue,
  expressionToEval: state.expressionToEval,
  isExprResolved: state.isExpressionResolved,
  resolvedValue: state.resolvedValue,
  isAnsFieldShown: state.isAnsFieldShownRes
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(addValueToTabFromInput(e)),
  onSubmit: (e, exp) => dispatch(resolveValue(e, exp))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputData);
