"use client";
import React, { useState } from 'react';

const VerticalTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        "Quickly & Easily Price Update",
        "Smooth operations",
        "Improved Shopper Satisfaction",
        "Simple & Effortless integrations",
    ];

    const content = [
        "Retailers can use Electronic Shelf Labels (ESLs) to update pricing at the store or chain level quickly and accurately. This can be done through a central management platform, which ensures error-free and hassle-free pricing management. With a single management platform, retailers can enhance responsiveness, precision, and quality in pricing execution at the store or retail chain level.",
        "ESLs, or Electronic Shelf Labels, allow retailers to seamlessly integrate their current ERP systems. This integration provides several benefits, including quicker turnaround times and improved inventory management. The operational data, such as ERP and inventory information, can be displayed to associates directly on the shelf. This feature allows for smooth operations on the shop floor.",
        "Electronic shelf labels (ESLs) are a great way to enhance a shopper's experience. Besides providing accurate pricing, they offer real-time access to promotions and product information, allowing customers to discover new products, find relevant information, or get digital coupons. This seamless shopping experience is one of the most crucial factors that influence a customer's decision to make a purchase.",
        "Electronic Shelf Labels (ESLs) are a cost-effective solution that can help retailers manage their stores more efficiently. These labels are designed to work with existing network infrastructures in-store, which means that they can be quickly implemented without any additional infrastructure costs. In addition, ESLs make it easier to maintain systems and reduce a retailer's carbon footprint across their entire store chain.",
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="relative w-full max-w-[1000px] h-auto md:h-[400px] mx-auto flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-lg border border-gray-200">
            {/* Tabs */}
            <div className="w-full md:w-1/3 flex flex-col space-y-4 md:space-y-6 overflow-y-auto max-h-[400px]">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`h-[97px] transition-all px-2  sm:px-6
                        ${activeTab === index
                                ? 'bg-[#FDEEFF] border-l-4 border-[#D54DE8] text-black font-semibold shadow-md'
                                : 'bg-transparent border-transparent text-gray-600'
                            }`}
                        onClick={() => handleTabClick(index)}
                        style={{
                            fontFamily: 'Inter',
                            fontSize: '15px',
                            fontWeight: '700',
                            lineHeight: '24px',
                        }}
                        role="tab"
                        aria-selected={activeTab === index}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 p-4 sm:p-6 bg-[#FDEEFF] flex items-center justify-center">
                <div className="text-left">
                    <h4
                        className="text-lg sm:text-xl font-bold mb-4"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: '18px',
                            fontWeight: '700',
                            lineHeight: '24px',
                        }}
                    >
                        {tabs[activeTab]}
                    </h4>
                    <p
                        className="text-sm sm:text-lg text-black"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: '500',
                            lineHeight: '24px',
                        }}
                    >
                        {content[activeTab]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerticalTabs;
