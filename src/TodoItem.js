import React from "react";
import './TodoItem.css';

function TodoItem(props){
    const onComplete = () => {
        alert(`Tarea ${props.text} completada`)
    }

    const onDelete = () => {
        alert(`Tarea ${props.text} eliminada`)
    }

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                √
            </span>

            {/* Condicional, si el TodoItem recibe una props que se llama completed, entonces se agrega la clase del costado*/}
            <p 
                className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}
            >
                {props.text}
            </p>

            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };