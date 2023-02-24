import React from 'react';
import Project1 from '../../assests/firebase_todoList_app.png'
import Project2 from '../../assests/bookApp_project.png'
import { Link } from 'react-router-dom';

export default function Projects() {

    return (
        <div id='projects' >
            <div className='w-screen min-h-screen flex items-center flex-col  px-5 '>
                <h1 className='mt-20 font-bold text-xl sm:text-3xl underline decoration-orange-500'>My Projects</h1>

                <div
                    className='mt-5 w-full sm:w-[600px] min-h-[200px] sm:h-[500px]  rounded-md p-4 flex justify-center items-center gap-4 flex-col hover:shadow-lg hover:scale-105 duration-300'>
                    <h1 className='text-xl '>- Firebase <span className='text-orange-500'>Todo-List</span> App</h1>
                    <img src={Project1} alt="project1" className='object-cover w-[400px] h-[300px] ' />
                    <div className='flex gap-10'>

                        <Link
                            to={'https://react-js-firebase-crud-todo-list-app.vercel.app/'} className='bg-slate-200 text-orange-500 w-[100px] text-center rounded-xl hover:text-orange-300 duration-300 '>Demo</Link>

                        <Link
                            to={'https://github.com/Hendra89ms/ReactJs_firebase_crud_todoListApp'}
                            className='bg-slate-200 text-orange-500 w-[100px] text-center rounded-xl hover:text-orange-300 duration-300 '
                        >
                            Code</Link>
                    </div>

                </div>

                <div
                    className='mt-5 w-full sm:w-[600px] min-h-[200px] sm:h-[500px]  rounded-md p-4 flex justify-center items-center gap-4 flex-col hover:shadow-lg hover:scale-105 duration-300 '>

                    <h1 className='text-xl '>- Firebase <span className='text-orange-500'>Book</span> Apps</h1>
                    <img src={Project2} alt="project1" className='object-cover w-[400px] h-[300px] ' />
                    <div className='flex gap-10'>

                        <Link
                            to={'https://book-apps-blue.vercel.app/'} className='bg-slate-200 text-orange-500 w-[100px] text-center rounded-xl hover:text-orange-300 duration-300 '>Demo</Link>

                        <Link
                            to={'https://github.com/Hendra89ms/Book-Apps'}
                            className='bg-slate-200 text-orange-500 w-[100px] text-center rounded-xl hover:text-orange-300 duration-300 '
                        >
                            Code</Link>
                    </div>

                </div>




            </div>
        </div>

    );
}
