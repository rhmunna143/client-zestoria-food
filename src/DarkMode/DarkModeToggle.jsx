import sun from "./Sun.svg";
import moon from "./Moon.svg";
import { useState } from "react";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const html = document.querySelector("html");

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);

        // toggle your dark/light mode theme statements

        if (isDarkMode) {
            html.setAttribute("data-theme", "dark")
        } else {
            html.setAttribute("data-theme", "light")
        }
    };

    return (
        <div className={`dark-mode-toggle ${isDarkMode ? "dark" : "light"}`}>
            <label className="toggle-label relative flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    className="hidden"
                />

                <div className={`relative toggle-button w-16 h-8 ${!isDarkMode ? "bg-black" : "bg-gray-300"} rounded-full p-1`}>
                    <div
                        className={`sun-icon w-6 h-6 bg-yellow-400 rounded-full p-1 transition-transform transform ${isDarkMode ? "translate-x-8" : ""
                            }`}
                    >
                        <img src={sun} alt="Sun Icon" className="w-4 h-4 m-auto" />
                    </div>

                    <div
                        className={`absolute moon-icon top-1 w-6 h-6 bg-gray-700 rounded-full p-1 transition-transform transform ${isDarkMode ? "" : "translate-x-8"
                            }`}
                    >
                        <img src={moon} alt="Moon Icon" className="w-4 h-4 m-auto" />
                    </div>
                </div>
            </label>
        </div>
    );
};

export default DarkModeToggle;