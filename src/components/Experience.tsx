import { BriefcaseBusiness, ChevronDown } from "lucide-react";

export default function Experience() {

    interface ContentLine {
        id: number,
        title: string;
        description: string;
        date: string,
        tech: string[],
        position: string
    };

    const content: ContentLine[] = [
        {
            id: 1,
            title: "Estagiário em TI",
            description: "Estágio no setor de T.I em análise de sistemas, instalação de Windows e Linux, formatação de sistemas,manutenção de rede, infraestrutura, suporte de chamados e manutenção de hardware. Ajudei na manutenção e desenvolvimento de um sistema web em php para fluxo de inventário dos colaboradores.",
            date: "Fev de 2023 - Set de 2023",
            tech: ["Linux", "Zabbix", "Suporte", "MySQL"],
            position: "start"
        },
        {
            id: 2,
            title: "Desenvolvedor Web Trainee",
            description: "Atuei no desenvolvimento e manutenção de um SaaS no mercado livre de energia, implementando novas funcionalidades e corrigindo bugs críticos no backend e frontend. Tenho experiência sólida em versionamento de código, inicialmente com AWS e, posteriormente, com BitBucket, onde gerenciei branches e pull requests.",
            date: "Set de 2023 - Abril 2025",
            tech: ["PHP", "jQuery", "EasyUI", "MySQL", "AWS", "Jira", "Python", "Google Cloud", "GIT"],
            position: "end"

        },
        {
            id: 3,
            title: "Desenvolvedor Fullstack Jr",
            description: "Desenvolvimento e manutenção de CRM no setor de veículos.",
            date: "Mai 2025 - momento",
            tech: ["PHP", "Laravel", "Next.JS", "MySQL", "MongoDB", "Jira", "GitLab", "GIT"],
            position: "start"

        }
    ];

    return (
        <div id="xp" style={{ backgroundColor: 'var(--color-principal)' }} className="flex flex-col p-2 justify-center items-center w-full min-h-screen  text-white px-4 mx-auto">

            <h2 className="text-3xl font-bold mt-14 border-l-4 border-[#6366f1] pl-4 mb-3">
                Experiência profissional
            </h2>
            <p className="max-w-2xl  text-xl mt-4 mx-auto mb-12">
                Minha trajetória profissional na área da computação, de estagiário a desenvolvedor fullstack,
                demonstrando crescimento na construção de sistemas escaláveis e soluções financeiras.
            </p>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical gap-3">
                {content.map((list) => (
                    console.log(list.tech),
                    <li key={list.id} className="">
                        <div className="timeline-middle">
                            <BriefcaseBusiness />
                        </div>
                        <div className={`flex justify-center flex-col gap-2 cursor-pointer max-w-2xl bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] hover:border-[#6366f1] transition-colors duration-300 timeline-${list.position} mb-10 md:text-end`}>
                            <time className="font-mono italic text-[#6366f1]">{list.date}</time>
                            <div className="text-lg font-black">{list.title}</div>
                            <p>{list.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {list.tech.map((tech, index) => (
                                    <div key={index} className="bg-[#080808] px-2 py-1 rounded-lg border border-[#2a2a2a] hover:border-[#6366f1] transition-colors duration-300">
                                        <span>{tech}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end gap-2">
                                <ChevronDown className="text-[#6366f1]" />
                                {/* criar evento para mostrar mais informações */}
                                <span  className="text-[#6366f1] hover:underline"> Ver mais</span>
                            </div>
                        </div>
                        <hr />
                    </li>
                ))}


            </ul>
        </div>
    );
}
