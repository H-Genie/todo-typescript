import React from "react";
import { useSelector } from "react-redux";
import styles from "../Todo.module.css";
import { TodoState } from "../reducers/todos";

interface Props {
    onClearAll: () => void;
}

const TodoFooter = ({ onClearAll }: Props) => {
    const { todos, nextTodoId } = useSelector((state: TodoState) => ({
        todos: state.todos,
        nextTodoId: state.nextTodoId,
    }));

    const data = {
        todos,
        nextTodoId,
    };

    const onSave = () => {
        localStorage.setItem("todo-typescript", JSON.stringify(data));
        alert("변경사항을 저장하였습니다.");
    };

    return (
        <div className={styles.footer}>
            {todos.length !== 0 && <button onClick={onClearAll}>모두 삭제</button>}
            <button onClick={onSave}>저장</button>
        </div>
    );
};

export default TodoFooter;
