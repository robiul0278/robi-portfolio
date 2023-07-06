import { Tilt } from 'react-tilt'

import { FaArrowCircleRight } from "react-icons/fa";
import SectionTitle from '../Components/SectionTitle';
const Projects = () => {
    const projects = [
        {
            image: 'https://i.ibb.co/YfWKqYD/summer-camp.png',
            link: 'https://summer-camp-94a41.web.app/'
        },
        {
            image: 'https://i.ibb.co/FbSTj8g/screencapture-super-car-34741-web-app-2023-07-06-00-45-30.png',
            link: 'https://super-car-34741.web.app/'
        },
        {
            image: 'https://i.ibb.co/5YxXHFk/screencapture-cooker-ten-web-app-2023-07-06-00-48-17.png',
            link: 'https://cooker-ten.web.app/'
        },
        {
            image: 'https://i.ibb.co/xYrYpLD/screencapture-job-hunter-bd-netlify-app-2023-07-06-00-50-35.png',
            link: 'https://job-hunter-bd.netlify.app/'
        },
        {
            image: 'https://i.ibb.co/H2XbCk4/screencapture-code-cafe-hero-netlify-app-2023-07-06-00-53-40.png',
            link: 'https://code-cafe-hero.netlify.app/'
        },
        {
            image: 'https://i.ibb.co/84g3MSL/screencapture-car-doctor-crud-a655c-web-app-2023-07-06-00-58-22.png',
            link: 'https://car-doctor-crud-a655c.web.app/'
        },
    ]
    return (
        <>
            <SectionTitle text="Featured projects" />

            <div className="container-primary bg-slate-600 pb-10" data-aos="fade-up" id="projects">
                <h2 className="text-2xl tracking-wider inter text-left"><span className="text-3xl md:text-7xl  tracking-widest block">10+</span> completed projects_</h2>
                <hr className="w-2/4 my-3 mb-10" />
                <div className="grid md:grid-cols-2 grid-flow-col-1 gap-10">
                    {
                        projects.map((project, index) => <div key={index} className="shadow-lg ">
                            <Tilt

                                style={{ height: '100%', width: '100%', margin: 'auto', position: 'relative', }}>

                                <img className=" longImg h-[270px] xl:h-[320px] " src={project.image} alt="" />

                                <a href={project.link} rel="noreferrer" target="_blank" className=" text-lg text-white absolute bottom-2 btn bg-slate-600 p-2 rounded left-2 inter tracking-wider"> Preview <FaArrowCircleRight className="inline" /></a>

                            </Tilt>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};
export default Projects;