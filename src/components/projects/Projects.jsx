import React from 'react';

export default function Projects() {
    return (
        <div id='projects' >
            <h1 className='pl-5 mt-20 font-bold text-xl'>My Projects</h1>
            <div className='w-screen min-h-screen flex items-center flex-col gap-4 px-5'>

                <div className='mt-5 w-full min-h-[200px]  border-black border-[1px] rounded-md p-4'>
                    <h1>Project 1</h1>
                </div>

                <div className='mt-5 w-full min-h-[200px]  border-black border-[1px] rounded-md p-4'>
                    <h1>Project 2</h1>
                </div>

            </div>
        </div>

    );
}
