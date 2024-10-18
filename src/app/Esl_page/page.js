import Card from "../../components/card";
import Carousel from "../../components/Carousel";
import ShelfLable from "../../components/ShelfLable";
import VerticalTabs from "../../components/VerticalTabs";

function Esl_page() {
    const imageData = [
        {
            imageSrc: "img/ESL/carousel 1.png"
        },
        {
            imageSrc: "img/ESL/carousel 2.png"
        },
        {
            imageSrc: "img/ESL/carousel 3.png"
        },
        {
            imageSrc: "img/ESL/carousel 4.png"
        },
    ];

    return (
        <>
         
            <div
                style={{
                    background: "linear-gradient(270deg, rgba(236, 50, 55, 0) 0%, rgba(236, 50, 55, 0.108864) 5.55%, rgba(236, 50, 55, 0.349838) 78.69%, rgba(236, 50, 55, 0.5) 100%)",
                }}
            >
                <div
                    className="relative bg-cover bg-center h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh]"
                    style={{ backgroundImage: "url('img/ESL/Rectangle 135.png')" }}
                />
            </div>
            <div className="bg-gradient-to-b from-slate-100 to-orange-200">
                <div className="p-5 md:px-8 lg:px-16">
                    <div className="text-center mb-8 relative">
                        <img
                            src="img/ESL/b24e9cb61282af1cc6aeef68e876d4fc.png"
                            alt="stars with glow effects"
                            className="absolute hidden lg:block"
                        />
                        <img
                            src="img/two large and one small green leaf lying on top of each other.png"
                            alt="leaf"
                            className="absolute top-5 right-0 w-[40px] h-[30px] sm:w-[60px] sm:h-[50px] hidden lg:block"
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

                        <h1 className="bg-gradient-to-r from-red-700 via-red-300 to-slate-300 inline-block text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-5 lg:h-[58px]">
                            Electronic Shelf Label Price Tag - Retail Benefits
                        </h1>
                        <div className="flex items-center justify-center mx-auto w-full max-w-[985px] h-[78px] relative px-4">
                            <p className="text-base md:text-xl lg:text-2xl font-bold font-inter text-center leading-tight">
                                Enhance the efficiency of your store with the help of advanced digital pricing solutions.
                            </p>
                        </div>
                    </div>
                    <VerticalTabs />
                    <div className="flex justify-center items-center mt-10">
                        <div className="w-full max-w-[1200px] border-t border-black"></div>
                    </div>
                </div>
                <div className="px-4 md:px-28">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-left">
                        Dynamic Displays, Dynamic Sales
                    </h1>
                    <p className="mt-4 md:mt-5 text-lg md:text-xl font-medium leading-relaxed text-left">
                        Stay ahead of the curve with ESL technology, ensuring your retail strategy remains agile, accurate, and adaptable to market changes.
                    </p>
                </div>
                <div className="h-[40vh] sm:h-[65vh] md:h-[75vh] lg:h-[90vh] flex justify-center items-center overflow-hidden">
                    <Carousel>
                        {imageData.map((item, i) => (
                            <Card key={i} imageSrc={item.imageSrc} />
                        ))}
                    </Carousel>
                </div>


                <div className="px-4 md:px-28">
                    <h1 className=" md:mb-5 text-left text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        Electronic Shelf Label
                    </h1>
                </div>
                <ShelfLable />

            </div>
         
        </>
    );
}

export default Esl_page;
