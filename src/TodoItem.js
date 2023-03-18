import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>√</span>
            {/* Condicional, si el TodoItem recibe una props que se llama completed, entonces se agrega la clase del costado*/}
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <span className="Icon Icon-delete">X</span>
        </li>
    );
}

export { TodoItem };