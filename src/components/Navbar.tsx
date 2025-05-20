import { Menu } from 'lucide-react';
import '../App.css'
import { useIsMobile } from '../hooks/useIsMobile';

export default function Navbar() {

    interface MenuItem {
        id: number,
        name: string;
        transition: string;
    };

    const menuList: MenuItem[] = [
        { id: 1, name: 'Home', transition: '#home' },
        { id: 3, name: 'Experiência', transition: '#xp' },
        { id: 2, name: 'Projetos', transition: '#project' },
        { id: 4, name: 'Contato', transition: '#contact' },
    ];

    const isMobile = useIsMobile();

    return (
        <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex  justify-between rounded-full shadow-md mt-4 items-center ${isMobile ? 'w-2/3' : 'w-1/3'} h-20 p-4 text-white plus-jakarta-sans-equal`}
            style={{ backgroundColor: 'var(--color-navbar)' }}
        >
            {/* logo */}
            <div className='text-xl font-bold text-white'>
                <span className="text-[#6366f1]">Dev</span> Natan Silva
            </div>

            {isMobile ? (
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                        <Menu />
                    </label>
                    <ul tabIndex={0} style={{ backgroundColor: 'var(--color-navbar)' }} className="menu dropdown-content  rounded-box  w-52 p-2 shadow">
                        {menuList.map((list) => (
                            <li key={list.id}>
                                <a className="font-semibold text-lg" href={list.transition}>{list.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <nav>
                    <ul className='flex justify-center  gap-8'>
                        {menuList.map((list) => (
                            <li key={list.id}>
                                <a className='font-semibold text-lg text-gray-300 hover:underline hover:text-white' href={list.transition}>{list.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}

