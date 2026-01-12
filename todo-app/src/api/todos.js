const BASE_URL = "http://localhost:4000/todos";

export const fetchTodos = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch todos");
    return res.json();
};

export const createTodo = async (title) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });

    if (!res.ok) throw new Error("Failed to create todo");
    return res.json();
};

export const deleteTodo = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });

    if (!res.ok && res.status !== 204) {
        throw new Error("Failed to delete todo");
    }
};

export const toggleTodo = async (id, completed) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
    });

    if (!res.ok) {
        throw new Error("Failed to toggle todo");
    }

    return res.json();
};

export const updateTodo = async (id, title) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });

    if (!res.ok) {
        throw new Error("Failed to update todo");
    }

    return res.json();
};

export const deleteCompletedTodos = async () => {
    const res = await fetch(`${BASE_URL}/completed`, {
        method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete completed todos");
    return res.json();
};
