const BASE_URL = "http://localhost:4000/todos";

export async function fetchTodos() {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch todos");
    return res.json();
}

export async function createTodo(title) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    });

    if (!res.ok) throw new Error("Failed to create todo");
    return res.json();
}

export async function deleteTodo(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });

    if (!res.ok && res.status !== 204) {
        throw new Error("Failed to delete todo");
    }
}

export async function toggleTodo(id, completed) {
    const res = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed }),
    });

    if (!res.ok) {
        throw new Error("Failed to toggle todo");
    }

    return res.json();
}
