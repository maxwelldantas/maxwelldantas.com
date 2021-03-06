import { useTheme } from 'next-themes';

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <button onClick={toggleTheme}>
            {theme === 'light'
                ? "Tema Light"
                : "Tema Dark"
            }
        </button>
    );
}