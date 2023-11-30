import React from "react";
import "../stylesheet/Boton.css"
function Boton(props){

    const  isOperator = value =>{
        return isNaN(value) && (value !== ".") && (value !== "=") ;
    };

    return(
        <div
            className={`button-container ${isOperator(props.children) ? "operator" : ""}`.trimEnd()} onClick={() => props.clickManage(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;