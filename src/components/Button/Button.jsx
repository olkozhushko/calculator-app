import React from "react";

const Button = ({btnContent, id, sepClass, onClick, data}) => {
  
  let idPar = Number.isNaN(+id) ? "operator" : "param";
  // let pointClass = id === "." ? "btn-point" : "";

  if(onClick) {
    return (
      <button 
        type="button" 
        className={`button-${idPar} buttons-box__button ${sepClass}`}
        onClick={(e) => onClick(e, data)}>
        {btnContent}
      </button>
    )
  } else {
      return (
        <button 
          type="button" 
          className={`button-${idPar} buttons-box__button ${sepClass}`}>
          {btnContent}
        </button>
      )
  }
}

export default Button;