import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButtom(props){
    const onclickButton = () => {
        alert('Alerta de Modal')
    }

    return(
        <button 
        className="CreateTodoButton"
        onClick={onclickButton}
        >+</button>
    );
}

export { CreateTodoButtom};