import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

function NewTodo(props: NewTodoProps) {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandeler = (event: React.FormEvent) => {
        event.preventDefault();
        let enteredText: string;

        if (textInputRef.current) {
            enteredText = textInputRef.current.value;
        } else {
            throw new Error("please enter a todo");
        }
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={todoSubmitHandeler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add todo</button>
        </form>
    );
}

export default NewTodo;
