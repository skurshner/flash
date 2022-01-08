import React from "react";

function Header() {
  return (
    <header className="px-4 py-6 bg-gradient-to-br from-indigo-500  to-indigo-800">
      <div className="mx-auto max-w-screen-xl flex items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 text-slate-50"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="ml-2 text-3xl font-bold text-slate-50">Flash!</h1>
      </div>
    </header>
  );
}

export default Header;
