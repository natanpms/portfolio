import '../App.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mailsIcon from '../assets/mails.svg';

const icons: Record<string, string> = {
  github: githubIcon,
  linkedin: linkedinIcon,
  mails: mailsIcon,
};

export default function FinalContent() {

     interface FooterItem {
        id: number,
        name: string;
        link: string;
    };

    const items: FooterItem[] = [
        { id: 1, name: 'github', link: 'https://github.com/natanpms' },
        { id: 3, name: 'linkedin', link: 'https://www.linkedin.com/in/natanssilva/' },
        { id: 2, name: 'mails', link: 'mailto:natanportoms@outlook.com' },
    ];


    return (
        <footer id='contact' className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-8">
            <aside className="grid-flow-col items-center">
                <p className=' text-base plus-jakarta-sans-equal'>Natan Silva © {new Date().getFullYear()} - Todos os direitos reservados</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
               {items.map((item) => (
                <div className='flex justify-center flex-col gap-2 cursor-pointer max-w-2xl bg-[#1a1a1a] p-3 m-2 rounded-lg border border-[#2a2a2a] hover:border-[#6366f1]'>
                    <a href={item.link} target='_blank'>
                        <img src={icons[item.name]} alt={`${item.name} Icon`}  width={25} height={25} />
                    </a>
                </div>
               ))}
            </nav>
        </footer>
    );
}
