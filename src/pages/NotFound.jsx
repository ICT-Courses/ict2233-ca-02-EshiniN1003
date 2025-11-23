import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-6xl font-extrabold mb-3 text-gray-900 dark:text-white">
        404
      </h1>

      <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
        Page not found.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
      >
        Return Home
      </Link>

    </div>
  );
}
