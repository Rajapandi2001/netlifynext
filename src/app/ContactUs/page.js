function ContactUs() {
    return (
        <>
 
            <div className="overflow-hidden">
                {/* Hero Section */}
                <div
                    className="relative bg-cover bg-center h-64 md:h-96 lg:h-[30rem] "
                    style={{ backgroundImage: "url('img/Rectangle 39.png')" }}
                >
                    <div className="absolute ml-2 sm:ml-4 md:ml-10 mt-10 sm:mt-20 md:mt-40 px-2 sm:px-4">
                        <h1 className="bg-gradient-to-r from-slate-950 via-red-500 to-slate-500 inline-block text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-extrabold lg:h-[56px]">
                            30 years of Experience in Industry
                        </h1>
                        <div className="mt-2 sm:mt-4 md:mt-10">
                            <h1 className="bg-gradient-to-r from-slate-950 via-red-500 to-slate-500 inline-block text-transparent bg-clip-text text-lg sm:text-xl md:text-3xl lg:text-5xl font-inter font-extrabold">
                                KLM Traders
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Product Cards Section */}
                <div className="bg-gradient-to-b from-slate-100 to-orange-200 overflow-hidden">
                    <div className="flex flex-col gap-10 justify-center items-center px-4 sm:px-6 lg:px-8">
                        {/* Product Card 1 */}
                        <div className="w-full max-w-[1199px] h-auto sm:h-[151px] border-[0.5px] border-black flex flex-col sm:flex-row items-center gap-4 sm:gap-40 mt-10 sm:mt-20 p-4">
                            <img src="img/LED Display/Rectangle 45.png" alt="Product Image" className="w-[120px] h-[100px] sm:w-[154px] sm:h-[124px] ml-0 sm:ml-20 rounded-lg" />
                            <div className="flex items-center justify-between w-full pr-0 sm:pr-8">
                                <p className="text-base sm:text-xl font-bold">Product Details and Information</p>
                                <img src="img/Close.png" alt="Close" className="w-[17px] sm:w-[25px] cursor-pointer" />
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="w-full max-w-[1199px] h-auto sm:h-[151px] border-[0.5px] border-black flex flex-col sm:flex-row items-center gap-4 sm:gap-40 p-4">
                            <img src="img/LED Display/Rectangle 50.png" alt="Product Image" className="w-[120px] h-[100px] sm:w-[154px] sm:h-[124px] ml-0 sm:ml-20 rounded-lg" />
                            <div className="flex items-center justify-between w-full pr-0 sm:pr-8">
                                <p className="text-base sm:text-xl font-bold">Product Details and Information</p>
                                <img src="img/Close.png" alt="Close" className="w-[17px] sm:w-[25px] cursor-pointer" />
                            </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="w-full max-w-[1199px] h-auto sm:h-[151px] border-[0.5px] border-black flex flex-col sm:flex-row items-center gap-4 sm:gap-40 p-4 mb-10">
                            <img src="img/LED Display/Rectangle 43.png" alt="Product Image" className="w-[120px] h-[100px] sm:w-[154px] sm:h-[124px] ml-0 sm:ml-20 rounded-xl" />
                            <div className="flex items-center justify-between w-full pr-0 sm:pr-8">
                                <p className="text-base sm:text-xl font-bold">Product Details and Information</p>
                                <img src="img/Close.png" alt="Close" className="w-[17px] sm:w-[25px] cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col md:flex-row p-4 md:p-10">
                        <div className="bg-black text-white p-6 w-full md:w-96 h-fit mb-6 md:mb-0 md:mr-6">
                            <h2 className="text-2xl font-bold mb-4">Location Details</h2>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">Email</h3>
                                <p>sample123@klm.com</p>
                                <p>sample123@klm.com</p>
                                <p>sample123@klm.com</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">Phone</h3>
                                <p>+91 9874561230</p>
                                <p>+91 9874561230</p>
                                <p>+91 9874561230</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Address</h3>
                                <p>No.1232/A, Anna nagar, Park Avenue</p>
                                <p>Second cross Street, Kodambakkam</p>
                                <p>Chennai - 621002</p>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4">Contact us</h2>
                                <form className="space-y-4">
                                    <div className="flex flex-col md:flex-row md:space-x-4">
                                        <div className="flex-1 relative flex items-center justify-center">
                                            <img src="img/Name.png" alt="name" className="w-[25px] absolute end-5" />
                                            <input type="text" placeholder="Your name" className="mt-1 p-2 w-full border border-black" />
                                        </div>
                                        <div className="flex-1 mt-4 md:mt-0 relative flex items-center justify-center">
                                            <img src="img/Phone.png" alt="name" className="w-[25px] absolute end-5" />
                                            <input type="text" placeholder="Phone" className="mt-1 p-2 w-full border border-black" />
                                        </div>
                                    </div>
                                    <div className="flex-1 relative flex items-center justify-center">
                                        <img src="img/Email.png" alt="name" className="w-[25px] absolute end-5" />
                                        <input type="email" placeholder="Email" className="mt-1 p-2 w-full border border-black" />
                                    </div>
                                    <div className="flex-1 relative flex">
                                        <img src="img/Edit.png" alt="name" className="w-[25px] absolute end-5 top-3" />
                                        <textarea placeholder="Content" rows="15" className="mt-1 p-2 w-full border border-black"></textarea>
                                    </div>
                                    <div className="sm:text-center">
                                        <button type="submit" className="mt-4 px-4 py-2 bg-[#EC3237] font-inter font-bold text-white rounded-[20px] hover:bg-red-700">Leave a Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;