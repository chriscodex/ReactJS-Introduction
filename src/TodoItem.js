import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>√</span>
            {/* Condicional, si el TodoItem recibe una props que se llama completed, entonces se agrega la clase del costado*/}
        </li>
    );
}

export { TodoItem };