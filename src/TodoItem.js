import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>√</span>
        </li>
    );
}

export { TodoItem };