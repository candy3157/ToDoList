import { useState } from "react";

export default function TodoForm({ onAdd }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAdd(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            <button type="submit">추가</button>
        </form>
    );
}
