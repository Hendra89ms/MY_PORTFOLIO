import React from "react";
import img1 from '../../assets/Screenshot 2023-07-13 142318.png'
import img2 from '../../assets/Screenshot 2023-07-13 142633.png'

const Card = () => {
    return (
        <>
            <section className="w-full md:w-[1020px] pb-10 lg:pb-20 h-full bg-[#252422]">
                <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">

                    <SingleCard
                        image={img1}
                        CardTitle="Aplikasi E-Shopp App "
                        titleHref="/#"
                        btnHref="/#"
                        CardDescription="Aplikasi dibuat menggunakan teknologi react js dan tailwind css"
                        Button1="Live"
                        Button2='Demo'
                    />

                    <SingleCard
                        image={img2}
                        CardTitle="Aplikasi Booking App"
                        CardDescription="Aplikasi dibuat menggunakan teknologi react js dan tailwind css"
                        Button1="Live"
                        Button2='Demo'
                    />

                    <SingleCard
                        image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
                        CardTitle=" Creative Card Component designs graphic elements"
                        CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
                        Button1="View Details"
                    />

                </div>
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
    titleHref,
    btnHref,
}) => {
    return (
        <>
            {/*  */}
            <div className=" bg-white rounded-lg h-[400px]">
                <img src={image} alt="" className="w-full bg-cover rounded-t-md" />
                <div className="p-8 text-center sm:p-5 md:p-7 xl:p-9 ">
                    <h3>
                        <a
                            href={titleHref ? titleHref : "/#"}
                            className=" block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {CardTitle}
                        </a>
                    </h3>
                    <p className="text-base leading-relaxed mb-7 text-body-color">
                        {CardDescription}
                    </p>

                    <div className="flex gap-3 justify-center">
                        {Button1 && (
                            <a
                                href={btnHref ? btnHref : "#"}
                                className="rounded-full border bg-black text-white py-2 px-7 text-base font-medium text-body-color transition-shadow hover:text-orange-200 hover:shadow-md hover:shadow-orange-200 duration-300"
                            >
                                {Button1}
                            </a>
                        )}

                        {Button2 && (
                            <a
                                href={btnHref ? btnHref : "#"}
                                className=" rounded-full border bg-black text-white py-2 px-7 text-base font-medium text-body-color transition-shadow hover:text-orange-200 hover:shadow-md hover:shadow-orange-200 duration-300"
                            >
                                {Button2}
                            </a>
                        )}
                    </div>
                </div>
            </div>
            {/*  */}
        </>
    );
};
