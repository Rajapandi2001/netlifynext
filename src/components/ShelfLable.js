"use client";
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const ShelfLable = () => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        AOS.init(); // Initialize AOS
        AOS.refresh(); // Refresh AOS when the component mounts
    }, [activeTab]);

    const tabs = [
        "V 2.13 BWR",
        "V 2.66 BWR",
        "V 2.90 BWR",
        "V 3.52 BWR",
        "V 4.20 BWR",
        "V 5.83 BWR",
    ];

    const content = [
        // Content data here (same as before)
        {
            title: "V 2.13 BWR",
            productCode: "SID- ESL-05A",
            communicationTech: "2.4 GHz Private protocol",
            transmissionRange: "Radius 30 m",
            dimensions: "70x35x12.9",
            weight: "37",
            displayTech: "3 color Eink Display",
            activeDisplayArea: "48.55 x 23.70",
            resolution: "296 x 128",
            dotMatrix: "Yes",
            colors: "Black/White/Red",
            viewingAngle: "Nearly 180°",
            operatingTemperature: "0 - 40°c",
            battery: "CR2450x2",
            batteryLifeCycle: "> 5 Years",
            waterproofLevel: "IPX65",
            housingColor: "White",
            imageSrc: "img/ESL/6fe55c28813bbeaff5bfedd7e69a975a.png",
        },
        {
            title: "V 2.66 BWR",
            productCode: "SID- ESL-44A",
            communicationTech: "2.4 GHz Private protocol",
            transmissionRange: "Radius 30 m",
            dimensions: "85x42.5x12.9",
            weight: "39.9",
            displayTech: "3 color Eink Display",
            activeDisplayArea: "60.08 x 30.74",
            resolution: "296 x 152",
            dotMatrix: "Yes",
            colors: "Black/White/Red",
            viewingAngle: "Nearly 180°",
            operatingTemperature: "0 - 40°c",
            battery: "CR2450x2",
            batteryLifeCycle: "> 5 Years",
            waterproofLevel: "IPX65",
            housingColor: "White",
            imageSrc: "img/ESL/6fe55c28813bbeaff5bfedd7e69a975a.png",
        },
        {
            title: "V 2.90 BWR",
            productCode: "SID- ESL-08A",
            communicationTech: "2.4 GHz Private protocol",
            transmissionRange: "Radius 30 m",
            dimensions: "90.5x44x12.9",
            weight: "49",
            displayTech: "3 color Eink Display",
            activeDisplayArea: "66.85 x 29.10",
            resolution: "296 x 128",
            dotMatrix: "Yes",
            colors: "Black/White/Red",
            viewingAngle: "Nearly 180°",
            operatingTemperature: "0 - 40°c",
            battery: "CR2450x2",
            batteryLifeCycle: "> 5 Years",
            waterproofLevel: "IPX65",
            housingColor: "White",
            imageSrc: "img/ESL/6fe55c28813bbeaff5bfedd7e69a975a.png",
        },
        {
            title: "V 3.52 BWR",
            productCode: "SID- ESL-53A",
            communicationTech: "2.4 GHz Private protocol",
            transmissionRange: "Radius 30 m",
            dimensions: "98x60.3x12.9",
            weight: "52",
            displayTech: "3 color Eink Display",
            activeDisplayArea: "74.51x49.67",
            resolution: "360x240",
            dotMatrix: "Yes",
            colors: "Black/White/Red",
            viewingAngle: "Nearly 180°",
            operatingTemperature: "0 - 40°c",
            battery: "CR2450x2",
            batteryLifeCycle: "> 5 Years",
            waterproofLevel: "IPX65",
            housingColor: "White",
            imageSrc: "img/ESL/6fe55c28813bbeaff5bfedd7e69a975a.png",
        },
        {
            title: "V 4.20 BWR",
            productCode: "SID- ESL-28A",
            communicationTech: "2.4 GHz Private protocol",
            transmissionRange: "Radius 30 m",
            dimensions: "103 x 92 x 13.1",
            weight: "112",
            displayTech: "3 color Eink Display",
            activeDisplayArea: "84.80 x 63.60",
            resolution: "400 x 300",
            dotMatrix: "Yes",
            colors: "Black/White/Red",
            viewingAngle: "Nearly 180°",
            operatingTemperature: "0 - 40°c",
            battery: "CR2450x2",
            batteryLifeCycle: "> 5 Years",
            waterproofLevel: "IPX65",
            housingColor: "White",
            imageSrc: "img/ESL/6fe55c28813bbeaff5bfedd7e69a975a.png",
        },
        {
            title: "V 5.83 BWR",
            productCode: "SID- ESL-32A",
            communicationTech: "2.4 GHz Private protocol",
            transmissionRange: "Radius 30 m",
            dimensions: "140 x 117.5 x 13.1",
            weight: "149",
            displayTech: "3 color Eink Display",
            activeDisplayArea: "118.78 x 88.22",
            resolution: "648 x 480",
            dotMatrix: "Yes",
            colors: "Black/White/Red",
            viewingAngle: "Nearly 180°",
            operatingTemperature: "0 - 40°c",
            battery: "CR2450x3",
            batteryLifeCycle: "> 5 Years",
            waterproofLevel: "IPX65",
            housingColor: "White",
            imageSrc: "img/ESL/6fe55c28813bbeaff5bfedd7e69a975a.png",
        },

    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="w-full max-w-[1200px] lg:h-[950px] mx-auto px-4 py-4 lg:px-8">
            {/* Tabs */}
            <div className="flex overflow-x-auto mb-6 space-x-2">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-2 md:px-6 py-2 border-b-2 ${activeTab === index
                            ? 'border-[#000000] text-black text-[10px] md:text-[24px] font-extrabold'
                            : 'border-transparent text-black text-[10px] md:text-[24px] font-normal hover:border-[#000000]'
                            }`}
                        onClick={() => { handleTabClick(index); console.log(index) }}
                    >
                        {tab}
                    </button>
                ))}
            </div>


            {/* Content */}
            <div
                className="relative bg-[#FDEEFF] rounded-lg p-6 lg:p-8 lg:flex"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="700"
                data-aos-duration="1000"
                key={activeTab}
            >
                {/* Left Side */}
                <div className="lg:w-2/3">
                    <div className="text-left text-sky-900 text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-[28px] md:leading-[32px] lg:leading-[43.57px] mb-4 lg:mb-6">
                        {content[activeTab].title}
                    </div>

                    {/* Divider Line */}
                    <div className="border-4 border-blue-200 rounded-[20px] mb-4 lg:mb-6 w-full lg:w-[617px]"></div>
                    {/* TECHNICAL DETAILS */}
                    <div className='text-left text-cyan-600 text-[10px] md:text-[28px] lg:text-[20px] font-bold leading-[28px] md:leading-[32px] lg:leading-[43.57px] '>TECHNICAL DETAILS</div>
                    {/* Product Information */}
                    <div className="flex flex-col md:flex-row">
                        <div className="text-left font-inter text-[14px] md:text-[16px] lg:text-[20px] font-semibold leading-[20px] md:leading-[24.2px] lg:leading-[29.05px] mb-4 md:mb-0 lg:ml-3">
                            <p className="mb-2">Product code</p>
                            <p className="mb-2">Communication Technology</p>
                            <p className="mb-2">Transmission Range</p>
                            <p className="mb-2">Dimensions (mm)</p>
                            <p className="mb-2">Weight (g)</p>
                            <p className="mb-2">Display Technology</p>
                            <p className="mb-2">Active Display area</p>
                            <p className="mb-2">Resolution (pixels)</p>
                            <p className="mb-2">Dot Matrix</p>
                            <p className="mb-2">Colors</p>
                            <p className="mb-2">Viewing Angle</p>
                            <p className="mb-2">Operating Temperature</p>
                            <p className="mb-2">Battery</p>
                            <p className="mb-2">Battery Life Cycle</p>
                            <p className="mb-2">Waterproof Level</p>
                            <p className="mb-2">Housing Color</p>
                        </div>

                        <div className="text-left font-inter text-[14px] md:text-[16px] lg:text-[20px] font-normal leading-[20px] md:leading-[24.2px] lg:leading-[29.05px] ml-0 md:ml-10 lg:ml-44">
                            <p className="mb-2">{content[activeTab].productCode}</p>
                            <p className="mb-2">{content[activeTab].communicationTech}</p>
                            <p className="mb-2">{content[activeTab].transmissionRange}</p>
                            <p className="mb-2">{content[activeTab].dimensions}</p>
                            <p className="mb-2">{content[activeTab].weight}</p>
                            <p className="mb-2">{content[activeTab].displayTech}</p>
                            <p className="mb-2">{content[activeTab].activeDisplayArea}</p>
                            <p className="mb-2">{content[activeTab].resolution}</p>
                            <p className="mb-2">{content[activeTab].dotMatrix}</p>
                            <p className="mb-2">{content[activeTab].colors}</p>
                            <p className="mb-2">{content[activeTab].viewingAngle}</p>
                            <p className="mb-2">{content[activeTab].operatingTemperature}</p>
                            <p className="mb-2">{content[activeTab].battery}</p>
                            <p className="mb-2">{content[activeTab].batteryLifeCycle}</p>
                            <p className="mb-2">{content[activeTab].waterproofLevel}</p>
                            <p className="mb-2">{content[activeTab].housingColor}</p>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="relative lg:absolute lg:top-1/2 lg:left-[900px] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] mx-auto lg:mx-0">
                    <img
                        src={content[activeTab].imageSrc}
                        alt="Product Image"
                        className="w-full h-full object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default ShelfLable;
