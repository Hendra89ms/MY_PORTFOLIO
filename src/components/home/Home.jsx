import React from 'react';
import PhotoMe from '../../assests/photome2.jfif'
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import gmailIcon from '@iconify/icons-mdi/gmail';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import { Link } from 'react-router-dom'
import { Skills, Navbar, Projects, Contact } from '../../components';

export default function Home() {

    return (
        <>
            <Navbar />

            <div id='home' className='md:w-[900px] px-6 sm:px-0 w-screen min-h-screen mx-auto  flex flex-col justify-center items-center mt-6 sm:mt-0 '>

                <div className='flex sm:flex-row flex-col-reverse justify-center items-center sm:gap-10 gap-0 sm:mt-6 '>

                    <div className='md:w-[55%] flex flex-col gap-4 sm:gap-8'>
                        <div>
                            <p className='font-bold text-lg sm:text-xl'>Hello...👋 My Name is </p>
                            <h1 className='font-bold text-xl sm:text-2xl'>Hendra Manase Sitorus</h1>
                        </div>

                        <div className='text-slate-500 text-sm sm:text-lg '>
                            I am a Full Stack Developer who has experience and expertise in building quality and scalable web applications.
                            I understand technology and programming languages such as HTML, CSS, JavaScript, React, Node.js, and SQL. I am able to manage projects from start to finish, involve the team and work well in teamwork.

                        </div>

                        <div className='sm:mt-2'>
                            <h1 className='font-bold text-lg sm:text-xl text-slate-600'>Social Media</h1>
                            <div className='flex gap-3 sm:mt-2 mt-0'>
                                <Link to={'https://github.com/Hendra89ms'}>
                                    <Icon icon={githubIcon} className='sm:text-[35px] text-[28px] text-slate-700' />
                                </Link>
                                <Link to={'https://www.linkedin.com/in/hendra-manase-sitorus-180b5a1a2/'}>
                                    <Icon className='sm:text-[35px] text-[28px] text-slate-700' icon={linkedinIcon} />
                                </Link>

                                <Link to={'https://mail.google.com/mail/u/0/#sent?compose=new'}>
                                    <Icon className='sm:text-[35px] text-[28px] text-slate-700' icon={gmailIcon} />
                                </Link>

                            </div>

                        </div>
                    </div>

                    <div className='md:w-[45%] px-8 pt-8 pb-5 sm:pb-0  sm:p-0'>
                        <img src={PhotoMe} alt="photoMe" className='rounded-2xl' />
                    </div>

                </div>

            </div>

            {/* SKILLS */}

            <Skills />

            {/* END SKILLS */}

            {/* Projects */}

            <Projects />

            {/* END Projects */}

            {/* Contact */}

            <Contact />

            {/* END Contact */}
        </>

    );
}
