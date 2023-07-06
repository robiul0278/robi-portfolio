
import { useRef } from 'react';
import Button from '../Components/Button';
import profile from '../assets/profile.png'
import { useEffect } from 'react';
import Typed from 'typed.js';
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';

const Banner = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings:
                ['React.js', 'CSS3', 'Tailwind', 'JavaScript', 'JWT', 'Node.js', 'Redux', 'Express', 'MongoDB', 'Next.js'], cursorChar: '_',

            typeSpeed: 60,
            backSpeed: 60,
            loop: true,

        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="container-primary bg-slate-800 " id="home">
            <div className="flex-col md:flex-row justify-between items-start">
                <aside className='ml-auto hidden md:block' data-aos="slide-left">
                    <p className="text-sm md:text-md font-semibold leading-5 tracking-widest mt-3"> &lt; Front-end <br /> web developer. /&gt;</p>
                </aside>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className='mt-5 bg-gray-700 md:-mt-16 rounded-ful inline-block ring ring-offset-4'>
                    <img className='w-40 md:w-56' src={profile} alt="" />
                </div>

                <aside data-aos="slide-right">
                    <h1 className="text-3xl mt-3 tracking-widest font-bold">Robiul_Hasan</h1>
                </aside>

                <div className="flex flex-wrap md:flex-nowrap pt-5 gap-4 justify-center items-center">
                    <a href="http://www.facebook.com/robiul0278" target="_blank" rel="noreferrer" className=" social"><FaFacebook /></a>
                    <a href="https://twitter.com/robiul0278" target="_blank" rel="noreferrer" className=" social"><FaTwitter /></a>
                    <a href="https://github.com/robiul0278" target="_blank" rel="noreferrer" className=" social"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/robiul0278" target="_blank" rel="noreferrer" className=" social"><FaLinkedin /></a>
                    <a href="https://stackoverflow.com/users/20857380/robiul0278" target="_blank" rel="noreferrer" className=" social"><FaStackOverflow /></a>
                </div>


                <p className="text-md font-thin tracking-widest text-center w-5/6 mt-5 mx-auto">Hello, this is <span className="font-bold text-lg ">Robiul</span>. A passionate web developer from <span className='font-bold text-transparent bg-gradient-to-br bg-gradient-radial from-green-500 to-red-500 bg-clip-text'>Bangladesh.</span><br />
                    I am curious about <br /> <span ref={el}>React.js</span>
                </p>
                <span className='mt-5'>
                    <a href="https://drive.google.com/file/d/1Nw0z1U6OQGGEyn28L65wbrymslBWA5O_/view?usp=drive_link" target='blank'>
                        <Button text='My resume' />
                    </a>
                </span>
            </div>
        </div>
    );
};
export default Banner;