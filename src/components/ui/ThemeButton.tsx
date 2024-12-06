'use client'

import { useTheme } from "@/Providers/Theme.provider"; // Импортируйте контекст
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "./Button";

const ThemeButton = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <Button className='ml-2'onClick={toggleTheme} variant='ghost'>
            {isDarkTheme ? (
                <FaSun /> // Иконка солнца для светлой темы
            ) : (
                <FaMoon /> // Иконка луны для темной темы
            )}
        </Button>
    );
};

export default ThemeButton;