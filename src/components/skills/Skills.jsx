import React from 'react';
import Html from '../../assests/html_icon.png'
import Css from '../../assests/css_icon.png'
import Js from '../../assests/javascript_icon.png'
import NodeJs from '../../assests/node_js icon.png'
import ReactJs from '../../assests/reactJs_icon.png'

export default function Skills() {
    return (
        <div id='skills'
            className='md:w-[900px] px-2 sm:px-0 w-screen min-h-screen mx-auto flex flex-col sm:mt-0 mb-3 sm:mb-0'>
            <div className='flex flex-col pl-5 items-center sm:mb-8 mb-4'>
                <h1 className='sm:text-3xl text-xl font-bold underline decoration-orange-500'>Skills</h1>
                <p className='sm:text-xl text-lg font-bold text-slate-500'>My Top <span className='text-red-500 font-bold sm:text-xl text-lg'>Skills</span></p>
            </div>

            <div className='flex justify-center sm:justify-evenly items-center flex-wrap gap-6 px-4 '>

                <div className='border-[2px] border-red-500 w-full sm:w-[300px] h-[200px] rounded-xl flex flex-col justify-center items-center hover:shadow-lg hover:shadow-red-400 duration-300 hover:text-red-500 '>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold sm:text-2xl text-xl'>Html</p>
                        <img src={Html} alt="html_icon" className='w-[100px] h-[100px]' />
                    </div>
                    <div className='border-[2px] w-[100px] border-red-500 flex justify-center items-center rounded-full mt-2  '>
                        <div className='w-full h-[4px] bg-red-500 mr-2 rounded-full '></div>
                    </div>
                    <p className='font-bold text-slate-500'>Advance</p>
                </div>

                <div className='border-[2px] border-blue-500 w-full sm:w-[300px] h-[200px] rounded-xl flex flex-col justify-center items-center hover:shadow-lg hover:shadow-blue-400 duration-300 hover:text-blue-500'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold sm:text-2xl text-xl'>Css</p>
                        <img src={Css} alt="css_icon" className='w-[100px] h-[100px]' />
                    </div>
                    <div className='border-[2px] w-[100px] border-blue-500 flex justify-center items-center rounded-full mt-2  '>
                        <div className='w-full h-[4px] bg-blue-500 mr-4 rounded-full '></div>
                    </div>
                    <p className='font-bold text-slate-500'>Expect</p>
                </div>

                <div className='border-[2px] border-yellow-500 w-full sm:w-[300px] h-[200px] rounded-xl flex flex-col justify-center items-center hover:shadow-lg hover:shadow-yellow-400 duration-300 hover:text-yellow-500'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold sm:text-2xl text-xl'>Javascript</p>
                        <img src={Js} alt="css_icon" className='w-[100px] h-[100px]' />
                    </div>
                    <div className='border-[2px] w-[100px] border-yellow-500 flex justify-center items-center rounded-full mt-2  '>
                        <div className='w-full h-[4px] bg-yellow-500 mr-9 rounded-full '></div>
                    </div>
                    <p className='font-bold text-slate-500'>Beginner</p>
                </div>

                <div className='border-[2px] border-gray-500 w-full sm:w-[300px] h-[200px] rounded-xl flex flex-col justify-center items-center hover:shadow-lg hover:shadow-gray-400 duration-300 hover:text-gray-500'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold sm:text-2xl text-xl'>Node Js</p>
                        <img src={NodeJs} alt="css_icon" className='w-[100px] h-[100px]' />
                    </div>
                    <div className='border-[2px] w-[100px] border-gray-500 flex justify-center items-center rounded-full mt-2  '>
                        <div className='w-full h-[4px] bg-gray-500 mr-9 rounded-full '></div>
                    </div>
                    <p className='font-bold text-slate-500'>Beginner</p>
                </div>

                <div className='border-[2px] border-[#72cae3] w-full sm:w-[300px] h-[200px] rounded-xl flex flex-col justify-center items-center hover:shadow-lg hover:shadow-[#63dcfd] duration-300 hover:text-[#63dcfd]'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold sm:text-2xl text-xl '>React Js</p>
                        <img src={ReactJs} alt="css_icon" className='w-[100px] h-[100px]' />
                    </div>
                    <div className='border-[2px] w-[100px] border-[#5cd7f9] flex justify-center items-center rounded-full mt-2  '>
                        <div className='w-full h-[4px] bg-[#62DAFC] mr-7 rounded-full '></div>
                    </div>
                    <p className='font-bold text-slate-500'>Intermediate</p>
                </div>



            </div>
        </div>
    );
}
