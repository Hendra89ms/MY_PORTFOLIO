import React from "react";
import img1 from '../../assets/Screenshot 2023-07-13 142318.png'
import img2 from '../../assets/Screenshot 2023-07-13 142633.png'
import img3 from '../../assets/Screenshot 2023-07-17 110707.png'
import img4 from '../../assets/Screenshot 2023-07-17 112627.png'
import img5 from '../../assets/Screenshot 2023-07-17 113455.png'
import img6 from '../../assets/todoListApp.jpg';
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <>
            <section className="w-full md:w-[1020px] pb-10 lg:pb-20 h-full bg-[#252422]">
                <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">

                    <SingleCard
                        image={img1}
                        CardTitle="E-Shopp App"
                        CardDescription="Application created using react js and tailwind css technology, using useContext as state management"
                        Button1="Live"
                        Button2='Demo'

                        linkLive='https://eshop-app-eta.vercel.app/'
                        linkDemo='https://github.com/Hendra89ms/eshop-App'

                    />

                    <SingleCard
                        image={img2}
                        CardTitle="Booking App"
                        CardDescription="The application was created using react js and tailwind css technology, and I implemented responsive website design"
                        Button1="Live"
                        Button2='Demo'
                        linkLive='https://booking-apps.vercel.app/'
                        linkDemo='https://github.com/Hendra89ms/Booking-Apps'
                    />

                    <SingleCard
                        image={img3}
                        CardTitle="Todo List App"
                        CardDescription="Application created using react js technology, tailwind css and firebase, implementing CRUD"
                        Button1="Live"
                        Button2="Demo"
                        linkLive='https://react-js-firebase-crud-todo-list-app.vercel.app/'
                        linkDemo='https://github.com/Hendra89ms/ReactJs_firebase_crud_todoListApp'
                    />

                    <SingleCard
                        image={img4}
                        CardTitle="BookApp crud app"
                        CardDescription="Application created using react js technology, tailwind css and firebase"
                        Button1="Live"
                        Button2="Demo"
                        linkLive='https://book-apps-blue.vercel.app/'
                        linkDemo='https://github.com/Hendra89ms/Book-Apps'
                    />
                    <SingleCard
                        image={img5}
                        CardTitle="Calculator Set App"
                        CardDescription="Application created using react js technology, tailwind css"
                        Button1="Live"
                        Button2="Demo"
                        linkLive='https://kalkulator-app-three.vercel.app/'
                        linkDemo='https://github.com/Hendra89ms/Kalkulator-App'
                    />
                    <SingleCard
                        image={img6}
                        CardTitle="Simple Todo List app"
                        CardDescription="Application created using react js technology, tailwind css"
                        Button1="Live"
                        Button2="Demo"
                        linkLive='https://kalkulator-app-three.vercel.app/'
                        linkDemo='https://github.com/Hendra89ms/Kalkulator-App'
                    />

                </div>
                <div className='border-[1px] border-orange-500 w-full my-24'></div>
            </section>
        </>
    );
};

export default Card;

const SingleCard = ({
    image,
    Button1,
    Button2,
    CardDescription,
    CardTitle,
    linkLive,
    linkDemo
}) => {


    return (
        <>
            <div className=" bg-white rounded-lg h-max hover:shadow-md hover:scale-105 hover:shadow-orange-500 duration-300">
                <img src={image} alt="" className="w-full h-[150px] bg-cover rounded-t-md" />
                <div className="p-8 text-center sm:p-5 md:p-7 xl:p-9 flex flex-col gap-2">
                    <h3>
                        <div
                            className=" block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {CardTitle}
                        </div>
                    </h3>
                    <p className="text-base leading-relaxed mb-7 text-body-color">
                        {CardDescription}
                    </p>

                    <div className="flex gap-3 justify-center">
                        {Button1 && (
                            <Link
                                to={linkLive}
                                className="rounded-full border bg-black text-white py-2 px-7 text-base font-medium text-body-color transition-shadow hover:text-orange-200 hover:shadow-md hover:shadow-orange-200 duration-300"
                            >
                                {Button1}
                            </Link>
                        )}

                        {Button2 && (
                            <Link
                                to={linkDemo}
                                className=" rounded-full border bg-black text-white py-2 px-7 text-base font-medium text-body-color transition-shadow hover:text-orange-200 hover:shadow-md hover:shadow-orange-200 duration-300"
                            >
                                {Button2}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            {/*  */}
        </>
    );
};
