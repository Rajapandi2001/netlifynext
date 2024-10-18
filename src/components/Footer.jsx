import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-black text-white p-8">
            <div className="flex flex-col md:flex-row justify-around items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1">
                    <h2 className="font-bold mb-2 text-red-600 text-[20px] md:text-[24px]">Follow Us</h2>
                    <p className="w-[270px] text-[13px] md:text-[14px]">
                        We rank top for indoor and outdoor display <br />
                        <span className="ml-14">manufacturing</span><br />
                        in terms of production capacity.
                    </p>
                    <div className="flex space-x-4 mt-5">
                        <div className="hover:bg-red-500 p-1 rounded-full transition-all">
                            <Image src="/img/b176bbd0c44c56bc21105eb572cc1694.png" width={30} height={30} alt="Social Media Icon 1" />
                        </div>
                        <div className="hover:bg-red-500 p-1 rounded-full transition-all">
                            <Image src="/img/9fc297e83754640c21a4d2aee9dd0301.png" width={30} height={30} alt="Social Media Icon 2" />
                        </div>
                        <div className="hover:bg-red-500 p-1 rounded-full transition-all">
                            <Image src="/img/4a523806236f79f7572fb2c37b13e53d.png" width={30} height={30} alt="Social Media Icon 3" />
                        </div>
                        <div className="hover:bg-red-500 p-1 rounded-full transition-all">
                            <Image src="/img/516b48458d469253da960a6706a15ac4.png" width={30} height={30} alt="Social Media Icon 4" />
                        </div>
                    </div>

                </div>
                <div className="flex-1">
                    <h2 className="font-bold mb-2 text-red-600 text-[20px] md:text-[24px]">Quick Navigation</h2>
                    <ul>
                        <li className="mb-5 text-[14px] md:text-[16px] hover:text-red-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="mb-5 text-[14px] md:text-[16px] hover:text-red-500">
                            <Link href="/Preownedcars">Preowned Cars</Link>
                        </li>
                        <li className="mb-5 text-[14px] md:text-[16px] hover:text-red-500">
                            <Link href="/Esl_page">ESL</Link>
                        </li>
                        <li className="mb-5 text-[14px] md:text-[16px] hover:text-red-500">
                            <Link href="/">Video Display Monitors</Link>
                        </li>
                        <li className="mb-5 text-[14px] md:text-[16px] hover:text-red-500">
                            <Link href="/Blogs">Blogs</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h2 className="font-bold mb-2 text-red-600 text-[20px] md:text-[24px]">Categories</h2>
                    <ul>
                        <li className="mb-5 text-[14px] md:text-[16px]">Vehicle Gallery</li>
                        <li className="mb-5 text-[14px] md:text-[16px]">LED Display Categories</li>
                        <li className="mb-5 text-[14px] md:text-[16px]">ESL Categories</li>
                        <li className="mb-5 text-[14px] md:text-[16px]">Feedback</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h2 className="font-bold mb-2 text-red-600 text-[20px] md:text-[24px]">Contact Us</h2>
                    <p className="mb-5 text-[14px] md:text-[16px]">Email: sample123@klm.com</p>
                    <p className="mb-5 text-[14px] md:text-[16px]">Phone: +91 9874561230</p>
                    <p className="mb-5 text-[14px] md:text-[16px]">
                        Address: No.1232/A, Anna Nagar, Park Avenue <br />
                        <span className="ml-16">Second Cross Street, Kodambakkam </span><br />
                        <span className="ml-16">Chennai - 621002</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
