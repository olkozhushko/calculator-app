import React from "react";

const Button = ({btnContent, sepClass, onClick, data}) => {

  if(onClick) {
    return (
      <button 
        type="button" 
        className={`button-${sepClass} buttons-box__button`}
        onClick={(e) => onClick(e, data)}>
        {btnContent}
      </button>
    )
  } else {
      return (
        <button 
          type="button" 
          className={`button-${sepClass} buttons-box__button `}>
          {btnContent}
        </button>
      )
  }
}

export default Button;