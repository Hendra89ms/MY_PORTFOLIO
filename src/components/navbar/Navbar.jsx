import React, { useState } from 'react';
import { Link } from 'react-scroll'

export default function Navbar() {

    const [state, setState] = useState({
        iconHamburger: false,

    })

    const handleClickNav = () => {
        let icon = !state.iconHamburger

        setState({
            ...state,
            iconHamburger: icon
        })
    }





    return (
        <div className='bg-black w-full fixed top-0 left-0 '>
            <div className='md:w-[900px] mx-auto text-white h-[70px] flex justify-between px-3 sm:px-0 items-center  '>
                <h1 className='sm:text-xl select-none'>Hendra Manase <span className='text-red-500 '>Sitorus</span></h1>


                <div className="flex md:hidden">
                    <button
                        onClick={handleClickNav}
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400  hover:border-white duration-300">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <ul className='md:flex gap-10 cursor-pointer hidden '>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='hover:underline  hover:decoration-red-500 duration-300'>
                        Home
                    </Link>

                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className='hover:underline  hover:decoration-red-500 duration-300'>
                        Skills
                    </Link>

                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className='hover:underline  hover:decoration-red-500 duration-300'>
                        Projects
                    </Link>

                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='hover:underline  hover:decoration-red-500 duration-300'>
                        Contact
                    </Link>
                </ul>

                {/* TAMPILAN MOBILE */}

                {
                    state.iconHamburger && (
                        <ul className='md:hidden w-screen min-h-screen bg-black absolute inset-0 text-white flex flex-col gap-12 justify-center items-center text-md '>

                            <p
                                onClick={handleClickNav}
                                className='cursor-pointer hover:text-red-300 duration-300 absolute right-0 top-0 p-4'>Back</p>

                            <Link onClick={handleClickNav} to="home" spy={true} smooth={true} offset={-100} duration={500} className='hover:underline  hover:decoration-red-500 duration-300 cursor-pointer '>Home</Link>

                            <Link onClick={handleClickNav} to="skills" spy={true} smooth={true} offset={-100} duration={500} className='hover:underline  hover:decoration-red-500 duration-300 cursor-pointer'>Skills</Link>

                            <Link onClick={handleClickNav} to="projects" spy={true} smooth={true} offset={-100} duration={500} className='hover:underline  hover:decoration-red-500 duration-300 cursor-pointer'>Projects</Link>

                            <Link onClick={handleClickNav} to="contact" spy={true} smooth={true} offset={-100} duration={500} className='hover:underline  hover:decoration-red-500 duration-300 cursor-pointer'>Contact</Link>
                        </ul>
                    )
                }

                {/*END TAMPILAN MOBILE */}

            </div>

        </div>
    );
}
