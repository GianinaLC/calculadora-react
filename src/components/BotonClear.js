import React from "react";
import '../styles/BotonClear.css'
/* una forma de hacer el boton
const BotonClear = (props) => {
    return (
        <button
            className="boton-clear"
            onClick={props.manejarClear}>
            C
        </button>
    )
} */

const BotonClear = (props) => {
    return (
        <button
            className="boton-clear"
            onClick={props.manejarClear}>
            {props.children}
        </button>
    )
}

export default BotonClear