import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import gmailIcon from '@iconify/icons-mdi/gmail';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import { Link } from 'react-router-dom'
import { Skills, Navbar, Projects, Contact, Footer } from '../../components';
import PhotoMe from '../../assets/photome.png'
import './animate.css'

export default function Home() {

    useEffect(() => {
        // ANIMASI SLIDE UP DAN SLIDE DOWN
        const element1 = document.querySelector(".animate-slide-up");
        const element2 = document.querySelector(".animate-slide-down");
        element1.classList.add("animate-slide-up-keyframes");
        element2.classList.add("animate-slide-down-keyframes");

    }, [])

    return (
        <>
            <Navbar />

            <div className='w-full text-slate-400 sm:mt-28 mt-10'>
                <div id='home' className='md:w-[900px] px-6 sm:px-0 w-full mx-auto  flex flex-col justify-center items-center  sm:mt-0 '>

                    <div className='w-full flex sm:flex-row flex-col justify-center items-center sm:gap-20 gap-0 sm:mt-6 '>

                        <div className='md:w-[45%] px-8 pt-8 pb-5 sm:pb-0 sm:p-0 animate-slide-down'>
                            <img
                                src={PhotoMe}
                                alt="photoMe"

                                className=' h-[300px] w-[500px] my-8 md:my-0 md:h-[400px]  rounded-3xl duration-300' />
                        </div>

                        <div className='md:w-[55%] flex flex-col gap-4 sm:gap-8 p-2 animate-slide-up'>

                            <div className='shadow-md '>
                                <p className='font-bold text-lg sm:text-xl '>Hello...👋 My Name is </p>
                                <h1 className='font-bold text-xl sm:text-2xl text-orange-200'>Hendra Ms</h1>
                            </div>

                            <div className='text-slate-400 text-sm sm:text-lg '>
                                I am a <span className='text-orange-200'>Front-End Developer</span> who has experience and expertise in building quality and scalable web applications.
                                I understand technology and programming languages such as HTML, CSS, JavaScript, React, Node.js. I am able to manage projects from start to finish, involve the team and work well in teamwork.
                            </div>

                            <div className='sm:mt-2 text-slate-400'>
                                <h1 className='font-bold text-lg sm:text-xl'>Social Media</h1>
                                <div className='flex gap-3 sm:mt-2 mt-0'>
                                    <Link to={'https://github.com/Hendra89ms'} >
                                        <Icon icon={githubIcon} className='sm:text-[35px] text-[28px] hover:shadow-md hover:shadow-orange-200 duration-300' />
                                    </Link>
                                    <Link to={'https://www.linkedin.com/in/hendra-manase-sitorus-180b5a1a2/'}>
                                        <Icon className='sm:text-[35px] text-[28px] hover:shadow-md hover:shadow-orange-200 duration-300' icon={linkedinIcon} />
                                    </Link>

                                    <Link to={'https://mail.google.com/mail/u/0/#sent?compose=new'}>
                                        <Icon className='sm:text-[35px] text-[28px] hover:shadow-md hover:shadow-orange-200 duration-300' icon={gmailIcon} />
                                    </Link>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='border-[1px] border-orange-500 w-full my-28 hidden md:block'></div>
                </div>
            </div>



            <div id='skills'>
                <Skills />
            </div>

            <div id='projects'>
                <Projects />
            </div>

            <div id='contact'>
                <Contact />
            </div>

            <Footer />
        </>

    );
}
