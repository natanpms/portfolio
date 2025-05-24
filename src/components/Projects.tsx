import data from '../assets/projects.json';
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectPic from '../assets/Brackets logo.jpeg'
import { CloudDownload, Github } from 'lucide-react';


interface DataProps {
    id: number;
    ies_finally: boolean;
    name: string;
    description: string;
    link: string;
    deploy: boolean;
    link_deploy: string;
}

export default function Projects() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024, // tablets ou notebooks menores
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
        appendDots: (dots: any) => (
            <div
                style={{
                    paddingTop: "15px",
                }}
            >
                <ul className="custom-dots" style={{ marginTop: "5px", display: "flex", gap: "12px", justifyContent: "center", textAlign: "center" }}>
                    {dots}
                </ul>
            </div>
        ),
        customPaging: (i: any) => (
            <div
                style={{
                    width: "30px",
                    color: "white",
                    border: "2px #6366f1 solid",
                    backgroundColor: "transparent",
                    borderRadius: "100%",
                    height: "30px",
                }}
            >
                {i + 1}
            </div>
        )
    };

    return (
        <div
            id="projects"
            style={{ backgroundColor: 'var(--color-principal)' }}
            className="flex flex-col p-2 justify-center items-center w-full min-h-screen text-white px-4 mx-auto"
        >
            <h2 className="text-3xl font-bold mt-14 border-l-4 border-[#6366f1] pl-4 mb-3">
                Projetos pessoais
            </h2>
            <p className="max-w-2xl text-sm md:text-xl mt-4 mx-auto mb-12">
                Abaixo está alguns de meus projetos pessoais que usei para aprender novas ferramentas, exercitar codificação e colocar minhas habilidades a mostra.
            </p>


            <div className="w-full max-w-6xl px-4 pb-10">
                <Slider {...settings}>
                    {data.projects.map((project: DataProps) => (
                        <div key={project.id} className="px-4">
                            <div className='flex flex-col gap-4 justify-center items-center  bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#6366f1] mb-4 p-6 h-[430px]'>
                                <img
                                    className="w-full h-48 object-cover"
                                    src={projectPic}
                                    alt="project"
                                />
                                <div className='flex justify-around items-center gap-7 mb-2'>
                                    <h3 className="text-regular font-bold ">{project.name}</h3>
                                    <div className={`badge badge-outline badge-sm ${project.ies_finally ? "badge-success" : "badge-warning"}`}>
                                        <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></polyline></g></svg>
                                        {project.ies_finally ? "Finalizado" : "Em andamento"}
                                    </div>
                                </div>
                                <p className="text-sm">{project.description}</p>

                                <div className='flex justify-between gap-4 items-center'>
                                    <a href={project.link} target='_blank' className="btn  rounded-md bg-transparent text-white border border-[#6366f1] hover:transform shadow-md p-3 text-base sm:text-lg">
                                        Código
                                        <Github />
                                    </a>

                                    {project?.deploy &&

                                        <a href={project?.link_deploy} target='_blank' className="btn  rounded-md bg-transparent text-white border border-[#6366f1] shadow-md p-3 text-base sm:text-lg">
                                            Deploy
                                            <CloudDownload />
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


        </div>
    );
}
