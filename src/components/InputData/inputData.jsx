import React from "react";
import { connect } from "react-redux";

import { addValueToTabFromInput, resolveValue } from "../../Actions/index";

const InputData = ({ inputValue, onChange}) => {

  return (
    <div className="enterbar-container">
      <div className="enterbar-data-wrapper">
        <span class="enterbar-data"></span>
      </div>
      <form 
        action="" 
        className="input-data" 
        autoComplete="off"
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
  resolvedValue: state.resolvedValue
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(addValueToTabFromInput(e)),
  onSubmit: (e, exp) => dispatch(resolveValue(e, exp))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputData);
