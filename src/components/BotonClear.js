import React from "react";
import "../stylesheet/BotonClear.css"
const BotonClear = (props) =>(

     <div className="boton-clear" onClick={()=> props.clearManage()}>
        {props.children}
     </div>
);

export default BotonClear;