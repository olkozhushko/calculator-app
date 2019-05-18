import React from "react";

const Button = ({btnContent, id, sepClass}) => {
  
  let idPar = Number.isNaN(+id) ? "operator" : "param";
  // let pointClass = id === "." ? "btn-point" : "";

  return (
    <button 
      type="button" 
      className={`button-${idPar} buttons-box__button ${sepClass}`}>
      {btnContent}
    </button>
  )
}

export default Button;