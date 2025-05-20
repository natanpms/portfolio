import { Download } from 'lucide-react';
import '../App.css';
import profile from '../assets/profile.jpeg';
import ScrollDown from './ScrollDown';

export default function Home() {
    return (
        <div id='home' style={{ backgroundColor: 'var(--color-principal)' }} className="flex flex-col justify-center items-center w-full min-h-screen  relative text-white px-4 mx-auto">
            {/* Avatar */}
            <div className="avatar mb-6 flex justify-center animate-in fade-in slide-in-from-top-8 duration-1000">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full shadow-lg overflow-hidden">
                    <img
                        className="w-full h-full object-cover "
                        src={profile}
                        alt="profile"
                    />
                </div>
            </div>
            {/* Título */}
            <h1 className=" animate-in fade-in slide-in-from-top-8 duration-1000 text-3xl sm:text-4xl md:text-5xl lg:text-5 xl xl:text-5xl plus-jakarta-sans-bold text-center leading-tight">
                Eu escrevo <span className="text-[#6366f1]">código</span> e<br />
                desenvolvo <span className="text-pink-500">soluções!</span>
            </h1>

            {/* Subtítulo */}
            <p className=" animate-in fade-in slide-in-from-top-8 duration-1000 mt-4 text-center max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 plus-jakarta-sans-equal">
                Sou um desenvolvedor de software full-stack, com
                2 anos de experiência profissional, especializado em desenvolvimento web.
                Minha expertise reside na criação de arquiteturas robustas e escaláveis...
            </p>

            {/* Botões */}
            <div className="mt-12 flex justify-center gap-6 animate-in fade-in slide-in-from-top-8 duration-1000">
                <a href='https://www.linkedin.com/in/natanssilva/' target='_blank' className="btn bg-[#0967C2] rounded-md text-white border-none shadow-none p-5 text-base sm:text-lg">
                    Conecte-se
                    <svg aria-label="LinkedIn logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                </a>
                <a href='../assets/curriculo-pt.pdf' download className="btn rounded-md  border-none shadow-none p-5 text-base sm:text-lg">
                    Baixar CV
                   <Download width={25} height={25}/>
                </a>

            </div>

            <ScrollDown />
        </div>
    );
}
