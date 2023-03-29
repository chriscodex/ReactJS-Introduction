import React from "react";
import "./CreateTodoButtom.css"

function CreateTodoButtom(props) {
    const onclickButtom = () => {
        alert('Alerta de Modal')
    }

    return (
        <button 
        className="CreateTodoButtom"
        onClick={onclickButtom}
        >+</button>
    )
}

export {CreateTodoButtom};