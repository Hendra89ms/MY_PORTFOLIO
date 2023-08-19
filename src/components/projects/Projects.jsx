import React from 'react';
import Project1 from '../../assets/firebase_todoList_app.png'
import Project2 from '../../assets/bookApp_project.png'
import { Link } from 'react-router-dom';
import Card from './Card';

export default function Projects() {

    return (
        <div className='bg-[#252422] w-full' >
            <div className='w-full flex items-center flex-col  px-5 '>
                <div className='w-full md:w-[900px]'>
                    <h1 className='mt-14 font-bold text-xl sm:text-3xl underline decoration-orange-200 text-orange-200'>My Projects</h1>
                    <hr className='bg-orange-200  w-[900px] mt-2' />

                </div>

                <Card />


            </div>
        </div>

    );
}
