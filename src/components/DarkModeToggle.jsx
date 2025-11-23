import useDarkMode from '../hooks/useDarkMode'


export default function DarkModeToggle() {
    const [theme, setTheme] = useDarkMode()
    return (
        <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-md border border-gray-200 dark:border-gray-700"
        aria-label="Toggle dark mode"
        >
            {theme === 'dark' ? '☀️' : '🌙'}</button>
            )
            }