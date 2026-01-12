import { useEffect, useState } from "react";
import {
    fetchTodos,
    createTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    deleteCompletedTodos,
} from "../api/todos";
import DarkModeToggle from "../components/DarkModeToggle";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [filter, setFilter] = useState("all");
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTitle, setEditTitle] = useState("");

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

    const startEdit = (todo) => {
        setEditTodoId(todo.id);
        setEditTitle(todo.title);
    };

    const saveEdit = async (id) => {
        if (!editTitle.trim()) return;
        const updatedTodo = await updateTodo(id, editTitle);

        setTodos((prev) =>
            prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
        );

        setEditTodoId(null);
        setEditTitle("");
    };

    const handleClearCompleted = async () => {
        if (!confirm("완료된 Todo를 모두 삭제할까요?")) return;
        await deleteCompletedTodos();
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "active") return !todo.completed;
        return true;
    });

    const remainingCount = todos.filter((todo) => !todo.completed).length;

    const filterButtonClass = (type) =>
        `px-3 py-1 rounded-md text-sm font-medium transition
        ${
            filter === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        }`;

    return (
        <div
            className="
            min-h-screen bg-gray-100 text-gray-900
            dark:bg-gray-900 dark:text-gray-100
            transition
        "
        >
            {/* 상단 바 */}
            <div className="max-w-xl mx-auto flex justify-between items-center p-6">
                <h2 className="text-3xl font-bold">Todo List</h2>
                <DarkModeToggle />
            </div>

            <div className="max-w-xl mx-auto px-6 pb-10">
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {remainingCount === 0
                        ? "모든 할 일을 완료했습니다 🎉"
                        : `남은 할 일: ${remainingCount}개`}
                </p>

                {/* 입력 */}
                <div className="flex gap-2 mb-4">
                    <input
                        className="
                            flex-1 border rounded-md px-3 py-2
                            bg-white dark:bg-gray-800
                            border-gray-300 dark:border-gray-700
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                        "
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="할 일 입력"
                    />
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        추가
                    </button>
                </div>

                {/* 필터 */}
                <div className="flex gap-2 mb-4">
                    <button
                        onClick={() => setFilter("all")}
                        className={filterButtonClass("all")}
                    >
                        전체
                    </button>
                    <button
                        onClick={() => setFilter("active")}
                        className={filterButtonClass("active")}
                    >
                        미완료
                    </button>
                    <button
                        onClick={() => setFilter("completed")}
                        className={filterButtonClass("completed")}
                    >
                        완료
                    </button>
                </div>

                {/* 완료 삭제 */}
                <button
                    onClick={handleClearCompleted}
                    disabled={todos.every((todo) => !todo.completed)}
                    className="
                        mb-6 px-4 py-2 rounded-md text-sm font-medium
                        bg-red-500 text-white hover:bg-red-600
                        disabled:bg-gray-300 disabled:cursor-not-allowed
                        transition
                    "
                >
                    완료된 Todo 삭제
                </button>

                {/* 목록 */}
                <ul className="space-y-2">
                    {filteredTodos.map((todo) => (
                        <li
                            key={todo.id}
                            className="
                                flex items-center gap-3
                                bg-white dark:bg-gray-800
                                border border-gray-200 dark:border-gray-700
                                rounded-md px-3 py-2
                            "
                        >
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggle(todo)}
                                className="w-4 h-4"
                            />

                            {editTodoId === todo.id ? (
                                <input
                                    className="
                                        flex-1 border rounded-md px-2 py-1
                                        bg-white dark:bg-gray-700
                                        border-gray-300 dark:border-gray-600
                                        focus:outline-none focus:ring-2 focus:ring-blue-500
                                    "
                                    value={editTitle}
                                    onChange={(e) =>
                                        setEditTitle(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter")
                                            saveEdit(todo.id);
                                        if (e.key === "Escape") {
                                            setEditTodoId(null);
                                            setEditTitle("");
                                        }
                                    }}
                                    autoFocus
                                />
                            ) : (
                                <span
                                    onDoubleClick={() => startEdit(todo)}
                                    className={`flex-1 cursor-pointer ${
                                        todo.completed
                                            ? "line-through text-gray-400"
                                            : "text-gray-800 dark:text-gray-100"
                                    }`}
                                >
                                    {todo.title}
                                </span>
                            )}

                            <button
                                onClick={() => startEdit(todo)}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                수정
                            </button>
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className="text-sm text-red-500 hover:underline"
                            >
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
