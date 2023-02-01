import React from "react";
import '../styles/BotonClear.css'
const BotonClear = (props) => {
    return (
        <button
            className="boton-clear"
            onClick={props.manejarClear}>
            Borrar
        </button>
    )
}

export default BotonClear