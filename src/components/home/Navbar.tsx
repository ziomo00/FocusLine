import { useState } from "react";

const navItems = ["Home", "Goals", "Tasks", "Analytics"];

function Navbar() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <header className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 shadow-[0_18px_45px_rgba(23,23,38,0.14)] backdrop-blur-[18px]">
      <a
        href="/"
        className="text-2xl font-extrabold tracking-tight text-white"
      >
        FocusLine
      </a>

      <nav className="flex items-center gap-2" aria-label="Главная навигация">
        {navItems.map((item) => {
          const isActive = activePage === item;

          return (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActivePage(item)}
              className={`
                rounded-full border px-[18px] py-3 text-[15px] no-underline transition duration-200
                ${
                  isActive
                    ? "border-white/15 bg-white/15 text-white"
                    : "border-transparent text-white/80 hover:border-white/15 hover:bg-white/15 hover:text-white"
                }
              `}
            >
              {item}
            </a>
          );
        })}

        <button
          type="button"
          aria-label="Открыть настройки"
          className="group grid h-[46px] w-[46px] place-items-center rounded-full border border-transparent bg-transparent transition duration-200 hover:border-white/15 hover:bg-white/15"
        >
          <img
            src="/settings.svg"
            alt=""
            className="h-5 w-5 opacity-80 transition duration-200 group-hover:rotate-45 group-hover:opacity-100"
          />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;