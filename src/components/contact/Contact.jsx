import React from 'react';
import { Icon } from '@iconify/react';
import baselineWhatsapp from '@iconify/icons-ic/baseline-whatsapp';
// import { Link } from 'react-router-dom';
import gmailIcon from '@iconify/icons-mdi/gmail';


export default function Contact() {

    // const ref = useRef()

    const handleWhatsapp = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        if (!name || !email || !message) {
            return alert('Silahkan Lengkapi Data !')
        }

        window.location.href = 'https://wa.me/+6283857768930'

        e.target.name.value = ''
        e.target.email.value = ''
        e.target.message.value = ''
    }


    return (
        <div
            id='contact'
            className='w-screen  min-h-screen flex items-center flex-col gap-4  px-5 mt-20 '>

            <h1 className='text-xl sm:text-3xl font-bold underline decoration-orange-500'>Contact</h1>

            <form onSubmit={handleWhatsapp} autoComplete='off' className='w-full sm:w-[600px] sm:px-8 sm:py-11 sm:focus-within:border-orange-200 sm:focus-within:border-[1.5px]  sm:focus-within:shadow-lg flex flex-col gap-4 rounded-md duration-300 ' >

                <p className='text-lg font-bold text-slate-500 mt-5'>Hello...👋 contact me now</p>


                <div className="relative ">

                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <Icon icon="icon-park-outline:edit-name" className='text-slate-400' />
                    </div>

                    <input type="text" id='name' placeholder='Name' className='border-[1px] outline-orange-500 border-slate-400 py-4 pl-9  rounded-md text-sm sm:text-lg w-full ' />
                </div>

                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3  pointer-events-none">
                        <Icon className='text-slate-400' icon={gmailIcon} />
                    </div>

                    <input type="email" id='email' placeholder='Email' className='border-[1px] outline-orange-500 border-slate-400 py-4 pl-9 rounded-md text-sm sm:text-lg w-full' />
                </div>

                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 pt-5 sm:pt-6 pl-3  pointer-events-none">
                        <Icon icon="ic:outline-message" className='text-slate-400' />
                    </div>

                    <textarea id='message' placeholder='Message' className='w-full h-[200px] border-[1px] outline-orange-500 border-slate-400 py-4 pl-9  text-sm sm:text-lg rounded-md'></textarea>

                </div>


                <button
                    type='submit'
                    className='w-[150px] bg-slate-300 hover:bg-slate-200  h-[40px] rounded-xl duration-300 flex justify-center items-center gap-1'>
                    <Icon icon={baselineWhatsapp} className="text-green-500 text-xl" />
                    <p className='text-green-500'>Send Me</p>
                </button>
            </form>
        </div>
    );
}
