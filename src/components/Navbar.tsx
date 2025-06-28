import '../App.css';
import { useIsMobile } from '../hooks/useIsMobile';
import { useState } from 'react';

export default function Navbar() {
  interface MenuItem {
    id: number;
    name: string;
    transition: string;
  }

  const menuList: MenuItem[] = [
    { id: 1, name: 'Home', transition: '#home' },
    { id: 2, name: 'Skills', transition: '#skills' },
    { id: 3, name: 'Experiência', transition: '#xp' },
    { id: 4, name: 'Projetos', transition: '#projects' },
  ];

  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao clicar em algum link
  const handleMenuClick = () => setMenuOpen(false);

  return (
    <div
      className={`fixed z-50 flex justify-between lg:justify-evenly w-full shadow-md  items-center ${
        isMobile ? 'w-2/3' : 'w-1/3'
      } h-20 p-4 text-white plus-jakarta-sans-equal`}
      style={{ backgroundColor: 'var(--color-navbar)' }}
    >
      {/* logo */}
      <div className="text-xl font-bold text-white">
        <span className="text-[#6366f1]">Dev</span> Natan Silva
      </div>

      {isMobile ? (
        <div className="relative dropdown dropdown-end border-none">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-circle bg-transparent text-white border-none shadow-none swap swap-rotate "
            aria-expanded={menuOpen}
            aria-haspopup="true"
          >
            <input type="checkbox" checked={menuOpen} readOnly />

            {/* Ícone menu */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* Ícone fechar */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </button>

          {menuOpen && (
            <ul
              tabIndex={0}
              style={{ backgroundColor: 'var(--color-navbar)' }}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 absolute -right-4"
            >
              {menuList.map((list) => (
                <li key={list.id}>
                  <a
                    className="font-semibold text-lg"
                    href={list.transition}
                    onClick={handleMenuClick}
                  >
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <nav>
          <ul className="flex justify-center gap-8">
            {menuList.map((list) => (
              <li key={list.id}>
                <a
                  className="font-semibold text-lg text-gray-300 hover:underline hover:text-white"
                  href={list.transition}
                >
                  {list.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
