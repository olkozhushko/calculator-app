import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import  { addValueToTab, resolveValue } from "../../Actions/index";


const btnSemantic = [
  ["AC", "clear"],
  ["DEL", "delete"],
  ["%", "module"],
  ["/", "divide"],
  ["7", "seven"],
  ["8", "eight"],
  ["9", "nine"],
  ["*", "multiply"],
  ["4", "four"],
  ["5", "five"],
  ["6", "six"],
  ["-", "subtract"],
  ["1", "one"],
  ["2", "two"],
  ["3", "three"],
  ["+", "plus"],
  [".", "point"],
  ["0", "zero"],
  ["=", "equal"],
]

const ButtonContainer = ({onClick, data, onEqualButtonClick, enteredValue}) => {
  const btns = btnSemantic.map((el, id) => {
    if(el[1] === "equal") {
      console.log("equal");
      return (<Button btnContent={el[0]} id={el[0]} key={id} sepClass={el[1]} onClick={onEqualButtonClick} data={data}/>);
    }
    return <Button btnContent={el[0]} id={el[0]} key={id} sepClass={el[1]}/>;
  })

  return (
    <div className="buttons-box" onClick={(e) => onClick(e, data)}>
      {btns}
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.enteredValue,
  enteredValue: state.enteredValue
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (e, data) => dispatch(addValueToTab(e, data)),
  onEqualButtonClick: (e, expr) => dispatch(resolveValue(e, expr))
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);