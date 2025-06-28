import data from '../assets/projects.json';
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectPic from '../assets/Brackets logo.jpeg'
import { CircleCheckBig, Clock, CloudDownload, FolderOpenDot, Funnel, Github } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import { useEffect, useState } from 'react';


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
    type FilterType = 'finalizado' | 'andamento' | null;
    const [projectsFiltered, setProjectsFiltered] = useState<DataProps[]>([]);

    const [filter, setFilter] = useState<FilterType>(null);

    useEffect(() => {
        if (filter) {
            const filterProjetct = data.projects.filter((project) => {
                const isFinally = filter === "finalizado"; //retorna true ou false de acordo com filtro
                return project.ies_finally === isFinally;
            });


            setProjectsFiltered(filterProjetct);
        } else {
            setProjectsFiltered(data.projects);
        }

    }, [data, filter]);

    const isMobile = useIsMobile();

    const settings = {
        dots: isMobile ? true : false,
        arrows: isMobile ? false : true,
        infinite: projectsFiltered.length > 3,
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
            <div style={{ paddingTop: "15px" }}>
                <ul
                    className="custom-dots"
                    style={{
                        marginTop: "5px",
                        display: "flex",
                        gap: "12px",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    {dots}
                </ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div className="dot w-5 h-5 border-2 border-primary rounded-full transition duration-300" />
        )
    };

    return (
        <div
            id="projects"
            style={{ backgroundColor: 'var(--color-principal)' }}
            className="flex flex-col p-2 justify-center items-start lg:items-center w-full min-h-screen text-white px-4 mx-auto"
        >
            <h2 className="text-3xl font-bold mt-14 border-l-4 border-[#6366f1] pl-4 mb-3">
                Projetos pessoais
            </h2>
            <p className="max-w-2xl text-sm md:text-xl mt-4 mx-auto mb-12">
                Abaixo está alguns de meus projetos pessoais que usei para aprender novas ferramentas, exercitar codificação e colocar minhas habilidades a mostra.
            </p>

            <div className="flex justify-end items-end w-full pr-8 lg:w-3/5 lg:pr-4 mx-auto mb-4">
                <div className={`dropdown ${isMobile ? 'dropdown-center' : 'dropdown-left'}`}>
                    <div tabIndex={0} role="button" className="btn  border-transparent hover:border-[#6366f1] transition-colors duration-300 ease-in-out bg-[#2a2a2a] shadow-none text-white  m-1 px-6 rounded-md">
                        <Funnel />
                        <span className="text-sm">Filtrar Projetos</span>
                    </div>
                    <ul style={{ backgroundColor: 'var(--color-navbar)' }} tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border-2 border-[#2a2a2a]">
                        <li>
                            <button className='text-sm' onClick={(() => setFilter('finalizado'))}><CircleCheckBig width={18} height={18} /> Finalizado</button></li>
                        <li>
                            <button className='text-sm' onClick={(() => setFilter('andamento'))}><Clock width={18} height={18} /> Em andamento</button>
                        </li>
                        <li>
                            <button className='text-sm' onClick={() => setFilter(null)}><FolderOpenDot width={18} height={18} /> Todos</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-6xl px-4 pb-10">
                <Slider {...settings}>
                    {projectsFiltered.map((project: DataProps) => (
                        <div key={project.id} className="px-4">
                            <div className='flex flex-col gap-4 justify-center items-center  bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#6366f1] transition-colors duration-300 ease-in-out mb-4 p-6 h-[450px] w-[78vw] lg:w-full'>
                                <img
                                    className="w-full h-48 object-cover"
                                    src={projectPic}
                                    alt="project"
                                />
                                <div className="flex justify-around items-center gap-7 mb-2">
                                    <h3 className="text-regular font-bold">{project.name}</h3>

                                    <div
                                        className={`badge badge-outline badge-sm ${project.ies_finally ? "badge-success" : "badge-warning"} flex items-center gap-1`}
                                    >
                                        {project.ies_finally ? (
                                            <>
                                                <svg
                                                    className="size-[1em]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g
                                                        fill="currentColor"
                                                        strokeLinejoin="miter"
                                                        strokeLinecap="butt"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="square"
                                                            strokeMiterlimit="10"
                                                            strokeWidth="2"
                                                        />
                                                        <polyline
                                                            points="7 13 10 16 17 8"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="square"
                                                            strokeMiterlimit="10"
                                                            strokeWidth="2"
                                                        />
                                                    </g>
                                                </svg>
                                                Finalizado
                                            </>
                                        ) : (
                                            <>
                                                <svg
                                                    className="size-[1em]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 18 18"
                                                >
                                                    <g fill="currentColor">
                                                        <path
                                                            d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                        />
                                                        <line
                                                            x1="9"
                                                            y1="6.5"
                                                            x2="9"
                                                            y2="10"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                        />
                                                        <path
                                                            d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
                                                            fill="currentColor"
                                                            data-stroke="none"
                                                            stroke="none"
                                                        />
                                                    </g>
                                                </svg>
                                                Em andamento
                                            </>
                                        )}
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
