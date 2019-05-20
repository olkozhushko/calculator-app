import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "../Button/Button";
import  { addValueToTab, resolveValue, cleanBarField, deleteCharacter } from "../../Actions/index";
import "./ButtonContainer.scss";


const btnSemantic = [
  ["AC", "clear"],
  ["DEL", "delete"],
  ["%", "operator"],
  ["/", "operator"],
  ["7", "param"],
  ["8", "param"],
  ["9", "param"],
  ["*", "operator"],
  ["4", "param"],
  ["5", "param"],
  ["6", "param"],
  ["-", "operator"],
  ["1", "param"],
  ["2", "param"],
  ["3", "param"],
  ["+", "operator"],
  [".", "point"],
  ["0", "param"],
  ["=", "equal"],
]

const ButtonContainer = ({onClick, data, onEqualButtonClick, onClearButtonClick, onDeleteButtonClick}) => {
  
  //map through array with button semantics to group them in one array
  //and separate logic for specific buttons such as "=", "AC" and "DEL"
  const btns = btnSemantic.map((el, id) => {

    if(el[1] === "equal") {
      return (<Button btnContent={el[0]} key={id} sepClass={el[1]} onClick={onEqualButtonClick} data={data}/>);
    }

    if(el[1] === "clear") {
      return (<Button btnContent={el[0]} key={id} sepClass={el[1]} onClick={onClearButtonClick} />);
    }

    if(el[1] === "delete") {
      return (<Button btnContent={el[0]} key={id} sepClass={el[1]} onClick={onDeleteButtonClick} />);
    }

    return <Button btnContent={el[0]} key={id} sepClass={el[1]}/>;
  })

  return (
    <div className="buttons-box" onClick={(e) => onClick(e, data)}>
      {btns}
    </div>
  )
}

ButtonContainer.propTypes = {
  data: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onEqualButtonClick: PropTypes.func.isRequired,
  onClearButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  data: state.enteredValue
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (e, data) => dispatch(addValueToTab(e, data)),
  onEqualButtonClick: (e, expr) => dispatch(resolveValue(e, expr)),
  onClearButtonClick: (e) => dispatch(cleanBarField(e)),
  onDeleteButtonClick: (e) => dispatch(deleteCharacter(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);