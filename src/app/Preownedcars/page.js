function PreownedCars() {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-64 sm:h-80 md:h-96 w-full"
                style={{ backgroundImage: "url('img/Per owned cars/Rectangle 73.png')" }}
            >
                <div className="absolute inset-0 bg-opacity-60 flex ml-5 mt-10 ">
                    <h1
                        className="
                text-white font-interer font-extrabold text-center
                text-4xl leading-snug
                sm:text-5xl sm:leading-tight sm:w-[90%]
                md:text-6xl md:leading-snug md:w-[80%]
                lg:text-7xl lg:leading-tight lg:w-[70%]
            "
                    >
                        A Whole <br />
                        New World of <br />
                        Cars
                    </h1>
                </div>
            </div>



            <div className="bg-gradient-to-b from-slate-100 to-orange-200">
                <div className=" p-4 md:p-8">
                    <div className="text-center  relative">
                        <img
                            src="img/ESL/b24e9cb61282af1cc6aeef68e876d4fc.png"
                            alt="stars with glow effects"
                            className="absolute hidden lg:block z-0 "
                        />
                        <img
                            src="img/two large and one small green leaf lying on top of each other.png"
                            alt="leaf"
                            className="absolute top-5 right-0 w-[40px] h-[30px] sm:w-[60px] sm:h-[50px] hidden lg:block z-0 "
                        />
                        <img
                            src="img/confetti-1.png"
                            alt="confetti"
                            className="absolute top-36 w-[30px] h-[50px] sm:w-[40px] sm:h-[60px] hidden lg:block"
                        />
                        <img
                            src="img/confetti-1.png"
                            alt="confetti"
                            className="absolute right-0 top-[400px] w-[30px] h-[50px] sm:w-[40px] sm:h-[60px] hidden lg:block"
                        />
                        <h2
                            className="text-red-500 text-2xl mb-2 md:mb-5  md:text-[40px] font-extrabold"
                            style={{
                                background: 'linear-gradient(90deg, #EE4D52 0%, #494949 99.99%, #020202 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',

                                md: { lineHeight: '48.41px' } // Larger line height for larger screens
                            }}
                        >
                            Discover Premium Pre-Owned Vehicles
                        </h2>

                        <h3 className="
    text-black text-center font-inter font-bold 
    text-[16px] leading-[25px]   <!-- Default mobile -->
    sm:text-[28px] sm:leading-[36px] 
    md:text-[32px] md:leading-[40px] 
    lg:text-[36px] lg:leading-[43.57px] 
    xl:text-[40px] xl:leading-[48px] 
    mt-2
">
                            Welcome to our premium pre-owned vehicle collection, where quality
                            <br class="hidden sm:block" />
                            meets affordability.
                        </h3>


                    </div>
                    <div className="max-w-lg md:max-w-xl lg:max-w-[1350px] mx-auto p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="">
                                <h4 className="text-black font-inter text-lg md:text-xl font-bold mb-1">
                                    Quality Inspection and Assurance
                                </h4>
                                <p className="text-black text-sm md:text-base lg:text-lg "
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 500,
                                    }}>
                                    Every pre-owned vehicle in our inventory undergoes a comprehensive inspection process. Our expert technicians check every aspect, from the engine and transmission to the interior and exterior, ensuring that each car meets our stringent quality standards. We prioritize your safety and satisfaction, providing you with vehicles that you can trust.
                                </p>
                            </div>
                            <div className="">
                                <h4 className="text-black font-inter text-lg md:text-xl font-bold mb-1">
                                    Authorized Vendor for Government Vehicles
                                </h4>
                                <p className="text-black text-sm md:text-base lg:text-lg "
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 500,
                                    }}>
                                    As a trusted vendor for government vehicles, we uphold the highest standards of quality and reliability. Our reputation for excellence has made us a preferred choice for various government departments. Browse our selection of government-approved vehicles and find your ideal match.
                                </p>

                            </div>
                            <div className="">
                                <h4 className="text-black text-lg md:text-xl font-bold mb-1">
                                    Seamless Buying and Selling Experience
                                </h4>
                                <p className="text-black text-sm md:text-base lg:text-lg "
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 500,
                                    }}>
                                    Looking to sell your current car or trade it in for a new one? We offer a hassle-free process that guarantees fair evaluation and competitive offers. Our team is here to assist you every step of the way, ensuring a smooth transaction whether you are buying or selling.
                                </p>
                            </div>
                            <div className="">
                                <h4 className="text-black font-inter text-lg md:text-xl font-bold mb-1">
                                    Affordable Luxury for Everyone
                                </h4>
                                <p className="text-black text-sm md:text-base lg:text-lg "
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 500,
                                    }}>
                                    We believe that everyone deserves to experience the luxury of driving a high-quality vehicle without breaking the bank. Our pricing strategy is designed to offer unbeatable value, ensuring that you get the best deal on your next car. Enjoy the perks of driving a premium car at a fraction of the cost.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="flex justify-center items-center mt-10">
                    <div class="w-full max-w-[1200px] h-0 border-t border-[1px] border-black"></div>
                </div>


                <div className="p-4 md:p-8 ">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-6 lg:ml-20">Vehicle Gallery</h1>
                    <div className="container mx-auto px-2 sm:px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-6">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index}
                                    className="bg-[#EBEBEB] shadow-lg rounded-lg overflow-hidden shadow-gray-500/50  max-w-[350px] max-h-[450px]"
                                >
                                    <img src={`img/Per owned cars/Rectangle ${index + 1}.png`}
                                        className="w-full h-40 sm:h-48 object-cover"
                                        alt={`Car ${index + 1}`}
                                    />
                                    <div className="p-2 sm:p-4">
                                        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-green-500">$15,00,000</h2>
                                        <p className="text-sm sm:text-base text-black mb-1 sm:mb-2 font-inter font-extrabold">
                                            Mercedes Benz C class 1.5 Elite
                                        </p>
                                        <p className="text-xs sm:text-sm text-black font-inter mb-2 sm:mb-4">
                                            51,222 KM | PETROL | MANUAL
                                        </p>
                                        <div className="flex justify-center items-center">
                                            <label className="inline-flex items-center">
                                                <input type="checkbox"
                                                    className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-green-600"
                                                />
                                                <span className="ml-2 text-black font-semibold font-inter text-sm sm:text-base">
                                                    Add to Enquiry
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div class="flex justify-center items-center mt-10">
                    <div class="w-full max-w-[1200px] h-0 border-t border-[1px] border-black"></div>
                </div>


                <div className="p-4 md:p-8 ">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 p-4">
                            <h1 className="text-base md:text-xl font-inter font-bold mb-4">
                                Discover unparalleled deals and insider insights with our handpicked pre-owned vehicles.
                                At KLM, we bring you the finest selection of reliable and quality-tested cars, ensuring a seamless and satisfying car buying experience. Join the ride and find your perfect vehicle today!
                            </h1>
                           
                           
                        </div>
                        <div className="lg:w-1/2 p-4">
                            <img
                                src="img/Per owned cars/Rectangle.png"
                                alt="Car Buying"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-4 mb-8">
                        {['Transparent Dealings', 'Thoroughly Inspected', 'Paint Restoration', 'Scratch Removal'].map((text, index) => (
                            <button
                                key={index}
                                className="
                bg-white text-black font-bold py-2 px-6 shadow-lg rounded-full shadow-gray-500/50 
                w-full h-[40px]
                sm:w-[200px] sm:h-[40px]
                md:w-[220px] md:h-[40px]
                lg:w-[250px] lg:h-[40px]
                xl:w-[300px] xl:h-[50px]
            "
                            >
                                {text} <span className="ml-2">✅</span>
                            </button>
                        ))}
                    </div>


                </div>

            </div>
        </>
    );
}

export default PreownedCars;
