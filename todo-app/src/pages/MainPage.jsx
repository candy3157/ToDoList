import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Todo App</h1>
            <p>할 일 관리를 시작하세요</p>

            <button onClick={() => navigate("/todos")}>TodoList로 이동</button>
        </div>
    );
}
