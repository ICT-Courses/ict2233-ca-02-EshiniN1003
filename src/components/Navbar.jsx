import { Link } from 'react-router-dom'; // 1. Import the Link component
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="py-6 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        <h1 className="text-xl font-bold dark:text-white">
          {/* 💡 Optionally, wrap your title in a Link to the Home page */}
          <Link to="/">Eshini Nethmini</Link>
        </h1>

        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-gray-800 dark:text-gray-200">
            {/* 2. Replace <a> tags with <Link> components and change 'href' to 'to' */}
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/projects">Projects</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/articles">Articles</Link></li>
          </ul>

          <DarkModeToggle />
        </div>

      </nav>
    </header>
  );
}