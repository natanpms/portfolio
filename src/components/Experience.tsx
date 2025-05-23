import { BriefcaseBusiness, Info } from "lucide-react";
import '../App.css';
import Modal from "./Modal";
import { useEffect, useState } from "react";

export default function Experience() {

    interface ContentLine {
        id: number,
        title: string;
        description: string;
        date: string,
        tech: string[],
        position: string,
        description_final: string,
    };

    const content: ContentLine[] = [
        {
            id: 1,
            title: "Desenvolvedor Fullstack Jr",
            description: "Desenvolvimento e manutenção de CRM no setor de concessionárias.",
            date: "Mai 2025 - momento",
            tech: ["PHP", "Laravel", "Next.JS", "MySQL", "MongoDB", "Jira", "GitLab", "GIT"],
            position: "start",
            description_final: `<p>
                                No dia a dia, trabalhei com metodologias ágeis(Kanban e Scrum) ,utilizando Jira para acompanhamento de tarefas no board, garantindo entregas eficientes e alinhamento com o time. Além de participar de daily's e reuniões técnicas.
                                </p>
                                <ul class="list-disc list-inside space-y-1 mt-4 text-wrap">
                                <li class="text-sm">Implementação de templates gerenciáveis utilizando <strong> Next.JS e TailwindCSS</strong>.</li>
                                <li class="text-sm">Versionamento com GitLab.</li>
                                <li class="text-sm">COntainerização do ambiente com Docker</li>
                                <li class="text-sm">Manutenção e implementação de features em sistemas legados utilizando <strong>Code Igniter </strong>.</li>
                                </ul>`

        },
        {
            id: 2,
            title: "Desenvolvedor Web Trainee",
            description: "Atuei no desenvolvimento e manutenção de um SaaS no mercado livre de energia, implementando novas funcionalidades e corrigindo bugs críticos no backend e frontend.",
            date: "Set de 2023 - Abril 2025",
            tech: ["PHP", "jQuery", "EasyUI", "MySQL", "AWS", "Jira", "Python", "Google Cloud", "GIT"],
            position: "end",
            description_final: `<p>
                                No dia a dia, trabalhei com metodologias ágeis (Kanban), utilizando Jira para acompanhamento de tarefas, garantindo entregas eficientes e alinhamento com o time. Além disso, auxiliei no onboarding de novos membros, facilitando a adaptação ao projeto.
                                </p>
                                <ul class="list-disc list-inside space-y-1 mt-4 text-wrap">
                                <li class="text-sm">Implementação e otimização de filas de processamento de documentos PDF (NF3-e), integrando o backend com APIs da AWS e Google Cloud.</li>
                                <li class="text-sm">Automação de faturamento e envio de e-mails, melhorando a eficiência operacional.</li>
                                <li class="text-sm">Criação de scripts em Python para desbloqueio de PDFs e leitura de dados.</li>
                                <li class="text-sm">Migração de serviços de AWS Textract para Google Cloud Document AI, incorporando Machine Learning ao processo de extração de dados de NF3-e.</li>
                                </ul>`

        },
         {
            id: 3,
            title: "Estagiário em TI",
            description: "Estágio no setor de T.I em análise de sistemas e infraestrutura.",
            date: "Fev de 2023 - Set de 2023",
            tech: ["Linux", "Zabbix", "Suporte", "MySQL"],
            position: "start",
            description_final: `<p>
                                No dia a dia, trabalhei com metodologias ágeis (Kanban), utilizando Jira para acompanhamento de tarefas.Além disso, auxiliei no onboarding de novos membros, facilitando a adaptação ao TI da empresa.
                                </p>
                                <ul class="list-disc list-inside space-y-1 mt-4 text-wrap">
                                <li class="text-sm">Instalação de Windows e Linux</li>
                                <li class="text-sm">Formatação de sistemas e manutenção de rede,</li>
                                <li class="text-sm">Suporte de chamados e manutenção de hardware</li>
                                <li class="text-sm">Monitoramento via Zabbix</li>
                                <li class="text-sm">Manutenção e desenvolvimento de um sistema web desenvolvido com <strong>HTML,JS, Bootstrap, PHP e MySQL</strong> para fluxo de inventário dos colaboradores.</li>
                                </ul>`
        }
    ];

    const [selectedItem, setSelectedItem] = useState<ContentLine | null>(null);

    useEffect(() => {
        if (selectedItem) {
            (document.getElementById('dlg') as HTMLDialogElement)?.showModal();
        }
    }, [selectedItem])

    return (
        <div id="xp" style={{ backgroundColor: 'var(--color-principal)' }} className="flex flex-col p-2 justify-center items-center w-full min-h-screen  text-white px-4 mx-auto">

            <h2 className="text-3xl font-bold mt-14 border-l-4 border-[#6366f1] pl-4 mb-3">
                Experiência profissional
            </h2>
            <p className="max-w-2xl  text-sm md:text-xl mt-4 mx-auto mb-12">
                Minha trajetória profissional na área da computação, de estagiário a desenvolvedor fullstack,
                demonstrando crescimento na construção de sistemas escaláveis e soluções financeiras.
            </p>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical gap-3">
                {content.map((list) => (
                    <li key={list.id} className="">
                        <div className="timeline-middle rounded-full border p-2 border-[#6366f1]">
                            <BriefcaseBusiness className="text-[#6366f1]" />
                        </div>
                        <div className={`flex justify-center flex-col gap-2 cursor-pointer max-w-2xl bg-[#1a1a1a] p-6 m-2 rounded-lg border border-[#2a2a2a] hover:border-[#6366f1] transition-colors duration-300 timeline-${list.position} mb-10 md:text-end`}>
                            <time className="font-mono italic text-[#6366f1]">{list.date}</time>
                            <div className="text-lg font-black">{list.title}</div>
                            <p>{list.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3 m-2">
                                {list.tech.map((tech, index) => (
                                    <div key={index} className="bg-[#080808]  px-2 py-1 rounded-lg border border-[#2a2a2a] hover:border-[#6366f1] transition-colors duration-300">
                                        <span>{tech}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end gap-2">
                                <Info className="text-[#6366f1]" />
                                {/* criar evento para mostrar mais informações */}
                                <span onClick={() => {
                                    setSelectedItem(list);
                                }} className="text-[#6366f1] hover:underline"> Ver mais</span>
                            </div>
                        </div>
                        <hr className="bg-[#6366f1]" />
                    </li>
                ))}

            </ul>
            {selectedItem && (
                <Modal
                    id="dlg"
                    text_description={selectedItem?.description_final}
                />
            )}
        </div>
    );
}
