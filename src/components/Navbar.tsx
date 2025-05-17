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
        <div className={`fixed top-0 z-50 flex ${isMobile ? 'justify-between' : 'justify-around'} items-center w-full h-20 p-4 text-white plus-jakarta-sans-equal`} style={{ backgroundColor: 'var(--color-navbar)' }}>
            {/* logo */}
            <div>
                logo                
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
                    <ul className='flex justify-center gap-16'>
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

