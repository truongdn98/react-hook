import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../contexts/TodoContext";
const Form = () => {
    const { addTodo } = useContext(TodoContext);
    const [title, setTitle] = useState("");
    const onTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (title !== "") {
            addTodo({
                id: uuidv4(),
                title,
            });
            setTitle("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nhập công việc "
                onChange={onTitleChange}
                value={title}
            />
            <input type="submit" />
        </form>
    );
};

export default Form;
