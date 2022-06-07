import React from "react";
import "./TodoList.css";

interface TodoListProps {
    items: { id: string; text: string }[];
    onDeleteTodo: (id: string) => void;
}

function TodoList(props: TodoListProps) {
    const deleteItemHandler = (todoId: string) => {
        props.onDeleteTodo(todoId);
    };

    return (
        <ul>
            {props.items.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={deleteItemHandler.bind(null, todo.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
