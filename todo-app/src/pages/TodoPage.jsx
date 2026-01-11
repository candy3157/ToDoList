import { useEffect, useState } from "react";
import { fetchTodos, createTodo, deleteTodo, toggleTodo } from "../api/todos";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetchTodos().then(setTodos);
    }, []);

    const handleAdd = async () => {
        if (!title.trim()) return;

        const newTodo = await createTodo(title);
        setTodos((prev) => [...prev, newTodo]);
        setTitle("");
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const handleToggle = async (todo) => {
        const updatedTodo = await toggleTodo(todo.id, !todo.completed);

        setTodos((prev) =>
            prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
        );
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Todo List</h2>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="할 일 입력"
            />
            <button onClick={handleAdd}>추가</button>

            <ul style={{ marginTop: "1rem" }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "8px",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggle(todo)}
                        />

                        <span
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                                color: todo.completed ? "gray" : "black",
                            }}
                        >
                            {todo.title}
                        </span>

                        <button onClick={() => handleDelete(todo.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
