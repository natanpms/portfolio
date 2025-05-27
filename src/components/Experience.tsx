import { BriefcaseBusiness, Info } from "lucide-react";
import '../App.css';
import Modal from "./Modal";
import { useEffect, useState } from "react";
import data from '../assets/experience.json';


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


    const [selectedItem, setSelectedItem] = useState<ContentLine | null>(null);

    useEffect(() => {
        if (selectedItem) {
            (document.getElementById('dlg') as HTMLDialogElement)?.showModal();
        }
    }, [selectedItem])

    return (
        <div id="xp" style={{ backgroundColor: 'var(--color-principal)' }} className="flex flex-col p-2 justify-center items-center w-full min-h-screen  text-white px-4 mx-auto">

            <h2 className="text-2xl font-bold mt-14 border-l-4 border-[#6366f1] pl-4 mb-3">
                Experiência profissional
            </h2>
            <p className="max-w-2xl  text-sm md:text-xl mt-4 mx-auto mb-12">
                Minha trajetória profissional na área da computação, de estagiário a desenvolvedor fullstack,
                demonstrando crescimento na construção de sistemas escaláveis e soluções financeiras.
            </p>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical gap-3">
                {data.map((list : ContentLine) => (
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
