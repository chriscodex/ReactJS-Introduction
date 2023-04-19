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
        >+</button>
    )
}

export {CreateTodoButtom};