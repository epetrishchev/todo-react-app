import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>
    )
}
