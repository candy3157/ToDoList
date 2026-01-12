import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div
            className="
                min-h-screen
                bg-gray-100 text-gray-900
                dark:bg-gray-900 dark:text-gray-100
                transition
            "
        >
            {/* 상단 바 */}
            <div className="max-w-xl mx-auto flex justify-end p-6">
                <DarkModeToggle />
            </div>

            {/* 메인 콘텐츠 */}
            <div className="flex flex-col items-center justify-center text-center px-6 mt-20">
                <h1 className="text-4xl font-bold mb-4">Todo App</h1>

                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    할 일 관리를 시작하세요
                </p>

                <button
                    onClick={() => navigate("/todos")}
                    className="
                        px-6 py-3 rounded-lg font-semibold
                        bg-blue-600 text-white
                        hover:bg-blue-700 active:scale-95
                        transition
                    "
                >
                    TodoList로 이동
                </button>
            </div>
        </div>
    );
}
