import React, { useState } from 'react';
import { Link } from 'react-scroll'

export default function Navbar() {

    const [state, setState] = useState({
        iconHamburger: false,
    })


    const handleClickHamburger = () => {
        let icon = !state.iconHamburger

        setState({
            ...state,
            iconHamburger: icon
        })
    }


    return (
        <div className='bg-black w-full fixed top-0 left-0 z-50 '>
            <div className='md:w-[900px] mx-auto text-white h-[70px] flex justify-between px-3 sm:px-0 items-center '>
                <h1 className='sm:text-xl select-none shadow-sm shadow-orange-200'>Hendra Manase <span className='text-orange-200 '>Sitorus</span></h1>

                <div className="flex md:hidden">
                    <button
                        onClick={handleClickHamburger}
                        className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-200  hover:border-white duration-500">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <ul className='md:flex gap-8 cursor-pointer hidden '>
                    <Link to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={`hover:shadow-md hover:shadow-orange-200  duration-300 px-3 text-orange-200 hover:text-white`}>
                        Home
                    </Link>

                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className='hover:shadow-md hover:shadow-orange-200 duration-300 px-3 text-orange-200 hover:text-white'>
                        Skills
                    </Link>

                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className='hover:shadow-md hover:shadow-orange-200 duration-300 px-3 text-orange-200 hover:text-white'>
                        Projects
                    </Link>

                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='hover:shadow-md hover:shadow-orange-200 duration-300 px-3 text-orange-200 hover:text-white'>
                        Contact
                    </Link>
                </ul>

            </div>
            {/* TAMPILAN MOBILE */}

            {
                state.iconHamburger && (
                    <ul className='md:hidden w-screen  h-[100px] bg-black  text-white flex flex-col gap-12 justify-center items-center text-md '>
                        <p
                            onClick={handleClickHamburger}
                            className='cursor-pointer hover:text-red-300 duration-500 z-50 bg-black absolute right-[-4px] top-0  py-0.5 px-3.5 mr-4 mt-5  border-[1px]  border-white rounded-md '>X</p>

                        <div className='flex gap-2'>
                            <Link onClick={handleClickHamburger} to="home" spy={true} smooth={true} offset={-100} duration={500} className='hover:shadow-md hover:shadow-orange-200  duration-300 px-3 text-orange-200 hover:text-white cursor-pointer '>Home</Link>

                            <Link onClick={handleClickHamburger} to="skills" spy={true} smooth={true} offset={-100} duration={500} className='hover:shadow-md hover:shadow-orange-200  duration-300 px-3 text-orange-200 hover:text-white cursor-pointer '>Skills</Link>

                            <Link onClick={handleClickHamburger} to="projects" spy={true} smooth={true} offset={-100} duration={500} className='hover:shadow-md hover:shadow-orange-200  duration-300 px-3 text-orange-200 hover:text-white cursor-pointer '>Projects</Link>

                            <Link onClick={handleClickHamburger} to="contact" spy={true} smooth={true} offset={-100} duration={500} className='hover:shadow-md hover:shadow-orange-200  duration-300 px-3 text-orange-200 hover:text-white cursor-pointer '>Contact</Link>
                        </div>
                    </ul>
                )
            }

            {/*END TAMPILAN MOBILE */}
        </div>
    );
}
