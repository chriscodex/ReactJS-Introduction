import React from "react";
import "./CreateTodoButtom.css"

function CreateTodoButtom(props) {
    const onclickButtom = () => {
        props.setOpenModal((prevState) => {
            return !prevState
        })
    }
}

export {CreateTodoButtom};