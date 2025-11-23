import DarkModeToggle from "../components/DarkModeToggle";

export default function Navbar() {
  return (
    <header className="py-6 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        
        <h1 className="text-xl font-bold dark:text-white">Eshini Nethmini</h1>

        
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-gray-800 dark:text-gray-200">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="/about">About</a></li>
            <li><a className="nav-link" href="/projects">Projects</a></li>
            <li><a className="nav-link" href="/contact">Contact</a></li>
            <li><a className="nav-link" href="/articles">Articles</a></li>
          </ul>

          <DarkModeToggle />
        </div>

      </nav>
    </header>
  );
}
