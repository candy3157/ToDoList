import { Routes, Route } from "react-router-dom";
import Main from "../pages/MainPage";
import Todo from "../pages/TodoPage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/todos" element={<Todo />} />
        </Routes>
    );
}
