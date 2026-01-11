export default function TodoList({ todos, onDelete }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.title}
                    <button onClick={() => onDelete(todo.id)}>삭제</button>
                </li>
            ))}
        </ul>
    );
}
