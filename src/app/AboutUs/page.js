function AboutsUS() {
    return (
        <>
            <div className="flex flex-col bg-gradient-to-b from-white to-orange-100 lg:flex-row justify-center items-center relative">
                <div className="lg:w-1/2 p-6">
                    <div className="mb-10 md:mb-14">
                        <h1
                            className="text-3xl lg:text-5xl font-bold mb-4"
                            style={{
                                background:
                                    "linear-gradient(90deg, #EC3237 0%, #F37E81 51%, #FAC6C8 99.99%, #FFFFFF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Welcome to <br />KLM Trader
                        </h1>
                        <p
                            className="
        text-base   md:text-base  lg:text-xl
        text-black 
        leading-relaxed  md:leading-loose lg:leading-9
        mb-4 md:mb-6 lg:mb-10 
        font-medium 
        text-left 
        tracking-wide
    "
                        >
                            At KLM Trader, our dedication to quality, transparency, ethics, and loyalty has been the foundation of our business for over 30+ years. Under the leadership of K.L. Madheswaran, we have expanded into various sectors. Today, we take pride in presenting our three main products and services: LED Video Display Panels, ESL Tags, and Pre-Owned Vehicles. Our unwavering commitment to quality and service excellence has earned us the trust of our clients and partners. We have also ventured into agricultural crop products, broadening our reach and expertise. In 2009, we secured a dealership with Honda Motorcycle and Scooter India Pvt Ltd, followed by Honda Siel Power Products Ltd in 2012.
                        </p>

                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-[20px] hover:bg-red-600 w-full md:w-auto">
                            Explore Now
                        </button>
                    </div>
                </div>
                <div className="lg:w-[588px] p-6 flex justify-center lg:justify-end">
                    <img
                        alt="home"
                        src="./img/Rectangle 15.png"
                        className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center bg-gradient-to-b from-slate-100 to-orange-200 px-2 sm:px-6">
                <div className="lg:ml-20 ml-5 mt-10 mb-10 lg:mb-32">
                    <h1
                        className="text-3xl mb-4 sm:text-4xl lg:text-6xl"
                        style={{
                            background: 'linear-gradient(90deg, #EE4D52 0%, #494949 99.99%, #020202 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: '800',
                        }}
                    >
                        Our Commitment to Social Responsibility
                    </h1>

                    <h2
                        className="font-inter mb-4 lg:mb-6 text-xl sm:text-2xl lg:text-4xl"
                        style={{
                            fontWeight: '600',
                            lineHeight: '1.2',
                        }}
                    >
                        Building a Better Future Together
                    </h2>

                    <p
                        className="mb-10 font-inter text-[16px] sm:text-lg lg:text-2xl"
                        style={{
                            fontWeight: '500',
                        }}
                    >
                        At KLM Trader, we believe in giving back to the community. Our social responsibility initiatives include:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 sm:gap-8 px-2 sm:px-4">
                        {/** Item 1 */}
                        <div className="flex items-start mb-6">
                            <span className="text-green-500 mr-2">
                                <img
                                    src="img/ac6a518e7ffaf0c25d04f9f3b52cf69c.png"
                                    className="w-8 sm:w-10"
                                    alt="Education Support Icon"
                                />
                            </span>
                            <div>
                                <h3
                                    className="text-lg sm:text-xl lg:text-2xl font-inter"
                                    style={{
                                        fontWeight: '600',
                                        lineHeight: '1.2',
                                    }}
                                >
                                    Education Support:
                                </h3>
                                <p
                                    className="font-inter text-sm sm:text-base lg:text-lg w-full sm:w-[513px]"
                                    style={{
                                        fontWeight: '500',
                                    }}
                                >
                                    Providing scholarships and educational resources to underprivileged children to help them achieve their academic dreams.
                                </p>
                            </div>
                        </div>

                        {/** Item 2 */}
                        <div className="flex items-start mb-6">
                            <span className="text-green-500 mr-2">
                                <img
                                    src="img/ac6a518e7ffaf0c25d04f9f3b52cf69c.png"
                                    className="w-8 sm:w-10"
                                    alt="Environmental Care Icon"
                                />
                            </span>
                            <div>
                                <h3
                                    className="text-lg sm:text-xl lg:text-2xl font-inter"
                                    style={{
                                        fontWeight: '600',
                                        lineHeight: '1.2',
                                    }}
                                >
                                    Environmental Care:
                                </h3>
                                <p
                                    className="font-inter text-sm sm:text-base lg:text-lg w-full sm:w-[513px]"
                                    style={{
                                        fontWeight: '500',
                                    }}
                                >
                                    Active participation in tree planting and maintenance programs to promote a greener environment.
                                </p>
                            </div>
                        </div>

                        {/** Item 3 */}
                        <div className="flex items-start mb-6">
                            <span className="text-green-500 mr-2">
                                <img
                                    src="img/ac6a518e7ffaf0c25d04f9f3b52cf69c.png"
                                    className="w-8 sm:w-10"
                                    alt="Women's Empowerment Icon"
                                />
                            </span>
                            <div>
                                <h3
                                    className="text-lg sm:text-xl lg:text-2xl font-inter"
                                    style={{
                                        fontWeight: '600',
                                        lineHeight: '1.2',
                                    }}
                                >
                                    Women's Empowerment:
                                </h3>
                                <p
                                    className="font-inter text-sm sm:text-base lg:text-lg w-full sm:w-[513px]"
                                    style={{
                                        fontWeight: '500',
                                    }}
                                >
                                    Supplying sewing machines to women, enabling them to generate independent income and improve their quality of life.
                                </p>
                            </div>
                        </div>

                        {/** Item 4 */}
                        <div className="flex items-start mb-6">
                            <span className="text-green-500 mr-2">
                                <img
                                    src="img/ac6a518e7ffaf0c25d04f9f3b52cf69c.png"
                                    className="w-8 sm:w-10"
                                    alt="Feeding the Needy Icon"
                                />
                            </span>
                            <div>
                                <h3
                                    className="text-lg sm:text-xl lg:text-2xl font-inter"
                                    style={{
                                        fontWeight: '600',
                                        lineHeight: '1.2',
                                    }}
                                >
                                    Feeding the Needy:
                                </h3>
                                <p
                                    className="font-inter text-sm sm:text-base lg:text-lg w-full sm:w-[513px]"
                                    style={{
                                        fontWeight: '500',
                                    }}
                                >
                                    Organizing regular food drives and meal services to ensure that those in need receive nutritious meals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-orange-100 p-6 text-center">
                <h2 className="font-inter mb-4 text-xl  sm:text-2xl lg:text-4xl font-extrabold leading-tight lg:leading-[48.41px]">
                    GUIDING PRINCIPLES FOR SUCCESS
                </h2>
                <p
                    className="mb-10 lg:mb-28 text-center mx-auto text-base lg:text-2xl font-medium leading-normal lg:leading-[33px] tracking-wide text-black max-w-full lg:max-w-[1165px]"
                >
                    Our mission, vision, and goals reflect our commitment to excellence, innovation, and social
                    responsibility. These guiding principles shape our approach to delivering superior products and
                    services, fostering trust, and making a positive impact on society.
                </p>

                <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    {/* Mission Section */}
                    <div className="relative w-full md:w-[350px] h-[350px] bg-[#EBEBEB] rounded-[20px] shadow-[0px_0px_30px_1px_#00000040] flex flex-col justify-center items-center  p-4">
                        <img
                            src="img/Abouts us/Reaching the goal.png"
                            alt="Mission"
                            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover"
                        />
                        <h4 className="text-black font-inter font-bold mb-4 text-center text-[16px] leading-[19.36px]">Our Mission</h4>
                        <p className="text-[16px] leading-[19.36px] font-normal font-inter  text-center  lg:mb-44">
                            To provide high-quality products and services that exceed our customers' expectations while maintaining the highest standards of integrity, transparency, and ethical conduct.
                        </p>
                    </div>

                    {/* Goal Section */}
                    <div className="relative w-full md:w-[350px] h-[350px] bg-[#EBEBEB] rounded-[20px] shadow-[0px_0px_30px_1px_#00000040] flex flex-col justify-center items-center  p-4">
                        <img
                            src="img/Abouts us/Businesswoman planning on reaching the goal.png"
                            alt="Goal"
                            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover "
                        />
                        <h4 className="text-black font-inter font-bold mb-2 text-center text-[16px] leading-[19.36px]">Our Goal</h4>
                        <p className="text-[16px] leading-[19.36px] font-normal font-inter  text-center  lg:mb-44">
                            To continually enhance our product offerings and services, foster long-term relationships with our clients, and contribute positively to society through responsible business practices and community support initiatives.
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="relative w-full md:w-[350px] h-[350px] bg-[#EBEBEB] rounded-[20px] shadow-[0px_0px_30px_1px_#00000040] flex flex-col justify-center items-center  p-4">
                        <img
                            src="img/Abouts us/Sailor looking through telescope off the mast.png"
                            alt="Vision"
                            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]  object-cover"
                        />
                        <h4 className="text-black font-inter font-bold mb-4 text-center text-[16px] leading-[19.36px]">Our Vision</h4>
                        <p className="text-[16px] leading-[19.36px] font-normal font-inter  text-center  lg:mb-44">
                            To be a leading, diversified business recognized for our commitment to quality, innovation, and social responsibility, creating value for our customers and communities.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AboutsUS;