// import { useEffect, useState } from "react";
import data from '../assets/techskills.json';
import '../App.css';

export default function TechSkills() {

    interface TechProps {
        id: number,
        title: string;
        path_icon: string;
    };

    return (
        <div id="skills" style={{ backgroundColor: 'var(--color-principal)' }} className="flex flex-col p-2 justify-center items-center w-full min-h-screen  text-white px-4 mx-auto">

            <h2 className="text-3xl font-bold mt-14 border-l-4 border-[#6366f1] pl-4 mb-3">
                Skills
            </h2>
            <p className="max-w-2xl  text-sm md:text-xl mt-4 mx-auto mb-12">
                As tecnologias e ferramentas que utilizo para construir sistemas e desenvolver meus projetos.
            </p>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-2'>
                {data.map((skill : TechProps) => (
                    <div key={skill.id} data-tip={skill.title} className={`tooltip gap-2 cursor-pointer  p-2 bg-[#1a1a1a] m-2 rounded-lg border border-[#2a2a2a] hover:border-[#6366f1] transition-colors duration-300 mb-10`}>
                        <img src={skill.path_icon} alt={`${skill.title} Icon`}  className="w-17 h-17"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
