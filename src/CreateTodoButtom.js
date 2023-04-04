import React from "react";
import "./CreateTodoButtom.css"

function CreateTodoButtom(props) {
    const onclickButtom = (msg) => {
        alert(msg)
    }

    return (
        <button 
            className="CreateTodoButtom"
            onClick={() => onclickButtom('Alerta de Modal')}
        >+</button>
    )
}

export {CreateTodoButtom};