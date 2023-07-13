import React, { useState } from 'react';
import './coba.css'
import { Navbar } from '../components';
import PhotoMe from '../assets/photoFb.jpg'
import './coba.css'

export default function Coba() {

    return (
        <>
            <Navbar />
            {/* <div className='flex justify-center items-center mt-[100px]'>
                <div className='w-[1024px] border-[1px] border-red-500 flex p-5'>
                    <div>
                        <h1>Hendra Ms</h1>
                    </div>
                    <div className="w-full rotate-45 ">
                        <div className='  bg-red-500 w-[300px] h-[300px] rounded-lg flex justify-center items-center'>
                            <div className='-rotate-45'>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="flex justify-center items-center mt-20">
                <div className="w-2/3 border border-red-500 flex p-5 justify-around">
                    <div>
                        <h1>Hendra Ms</h1>
                    </div>
                    <div className='transform rotate-45 m-10'>
                        <div className="w-[200px] h-[200px] bg-red-500 rounded-xl flex justify-center items-center">
                            <div className="-rotate-45">
                                <img src={PhotoMe} alt="photoME" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}
