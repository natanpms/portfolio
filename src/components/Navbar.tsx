import { Menu } from 'lucide-react';
import '../App.css'
import { useIsMobile } from '../hooks/useIsMobile';
function Navbar() {

    interface MenuItem {
        id: number,
        name: string;
        transition: string;
    };

    const menuList: MenuItem[] = [
        { id: 1, name: 'Home', transition: '#home' },
        { id: 2, name: 'Projetos', transition: '#project' },
        { id: 3, name: 'Experiência', transition: '#xp' },
        { id: 4, name: 'Contato', transition: '#contact' },
    ];

    const isMobile = useIsMobile();


    return (
        <div className={`fixed top-0 flex ${isMobile ? 'justify-between' : 'justify-around'} items-center w-full h-24 p-8 text-white plus-jakarta-sans-equal`} style={{ backgroundColor: 'var(--color-navbar)' }}>
            {/* logo */}
            <div>
                LOGO
            </div>

            {isMobile 
                ?
                <Menu/>
                :
                <nav>
                    <ul className='flex justify-center gap-16'  >
                        {menuList.map((list) => (
                            <li className='font-semibold text-lg' key={list.id}>{list.name}</li>
                        ))}
                    </ul>


                </nav>
            }

        </div>


    )
}

export default Navbar;

