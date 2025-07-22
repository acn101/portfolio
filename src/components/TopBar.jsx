import { useState } from 'react';

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#' },
    { label: 'Skills', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 h-[50px] transition-colors duration-300">
      <div className="h-full flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Alan Ngo</h1>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-900 dark:text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded border border-gray-200 dark:border-gray-700 transition-all duration-300 origin-top-right transform ${
              menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <ul>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
