import { useTheme } from "../context/ThemeContext";

export default function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="
                px-3 py-2 rounded-md text-sm font-medium
                bg-gray-200 text-gray-800
                dark:bg-gray-700 dark:text-gray-100
                hover:bg-gray-300 dark:hover:bg-gray-600
                transition
            "
        >
            {darkMode ? "라이트 모드" : "다크 모드"}
        </button>
    );
}
