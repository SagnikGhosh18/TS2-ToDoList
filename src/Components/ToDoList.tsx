import React from "react";

import "./TodoList.css";

interface ToDoListProps{
    items : {id: string, text: string}[];
    onDeleteHandler : (id: string) => void;
}

const ToDoList : React.FC<ToDoListProps> = ({items, onDeleteHandler})=>{



    return (
        <ul>
            {items.map(todo =>
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={onDeleteHandler.bind(null, todo.id)} >Delete</button>
                </li>
            )}
        </ul>
    )
};


export default ToDoList;