import React from "react";
import "./CreateTodoButtom.css"

function CreateTodoButtom(props) {
    const onclickButtom = () => {
        props.setOpenModal((prevState) => {
            return !prevState
        })
    }

    return (
        <button 
            className="CreateTodoButtom"
            onClick={onclickButtom}
        >+</button>
    )
}

export {CreateTodoButtom};