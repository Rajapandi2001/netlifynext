

function Home_page() {
  return (
    <>
    <title>KLM</title>
        <link rel="icon" href="img\logo.png" />
      <div className="flex flex-col bg-gradient-to-b from-orange-200 to-slate-100 lg:flex-row justify-center items-center relative">
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
              Transforming Trust into Reality <br className="hidden md:block" />
              for over 15+ years
            </h1>
            <p
              className="
        text-[16px]   md:text-lg  lg:text-xl
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
            src="./img/home/Rectangle 151.png"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
          />
        </div>
      </div>


      <div
        className="flex flex-col lg:flex-row justify-center items-center p-2 lg:p-6"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFC68B 100%)",
        }}
      >
        <div className="w-full lg:w-[588px] p-6">
          <img
            alt="Business Logos"
            src="./img/home/Rectangle 22.png"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#EC3237] to-[#702729] opacity-100"
            style={{ lineHeight: '1.2' }}
          >
            Thinking Big We Are ready
          </h1>

          <p
            className="
    text-sm md:text-base lg:text-lg 
    text-black 
    font-medium 
    leading-relaxed md:leading-normal 
    mb-4 md:mb-6 
    text-left tracking-wide
  "
          >
            At KLM Trader, we believe that trust is built through consistent delivery of quality products and transparent business practices. Our customers satisfaction is our highest priority, and we strive to exceed their expectations in every transaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 p-4 cu">
            <div className="bg-green-500 text-white font-bold flex items-center justify-center gap-2 rounded-[20px] p-2 sm:p-3">
              <span className="font-inter font-semibold text-sm sm:text-base cursor-pointer">WhatsApp</span>
              <img
                src="img/home/89460dcf6efdf6cf74e87eb2cfb16641.png"
                alt="WhatsApp Logo"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="bg-black text-white cursor-pointer font-bold text-sm sm:text-base w-auto h-auto px-12 py-2 rounded-full flex items-center justify-center ">
              Call
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 lg:mt-40 text-black">
            <div className="bg-gray-200 text-center p-4 rounded-[15px] flex-1 shadow-lg">
              <p className="font-bold text-sm md:text-base lg:text-lg">1000+ Happy Customers</p>
            </div>
            <div className="bg-gray-200 text-center p-4 rounded-[15px] flex-1 shadow-lg">
              <p className="font-bold text-sm md:text-base lg:text-lg">30+ Years of Experience</p>
            </div>
            <div className="bg-gray-200 text-center p-4 rounded-[15px] flex-1 shadow-lg">
              <p className="font-bold text-sm md:text-base lg:text-lg">Connected to 50+ Top Brands</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-200 p-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">What We Do?</h2>
        <p
          className="
    text-sm md:text-base lg:text-lg 
    text-black 
    font-medium 
    leading-relaxed md:leading-normal 
    tracking-wide 
    mb-4 md:mb-6 
    text-center mx-auto 
    max-w-full md:max-w-3xl
  "
        >
          Our business is built on a foundation of strong ethical principles and unwavering loyalty to our clients. We believe in fostering long-term relationships based on mutual respect and integrity. When you choose KLM Trader, you choose a partner committed to your success.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-64 h-64 bg-black rounded-lg flex justify-center items-center">
            <div
              className="absolute border-t-[3px] border-white"
              style={{
                width: '355px',
                height: '0',
                top: '50%', // Center vertically
                left: '50%', // Center horizontally
                transform: 'translate(-50%, -50%) rotate(-44.66deg)',
              }}
            ></div>

            <div
              className="absolute border-t-[3px] border-white"
              style={{
                width: '355px',
                height: '0',
                top: '50%', // Center vertically
                left: '50%', // Center horizontally
                transform: 'translate(-50%, -50%) rotate(44.66deg)',
              }}
            ></div>
          </div>
          <div className="relative w-64 h-64 bg-black rounded-lg flex justify-center items-center">
            <div
              className="absolute border-t-[3px] border-white"
              style={{
                width: '355px',
                height: '0',
                top: '50%', // Center vertically
                left: '50%', // Center horizontally
                transform: 'translate(-50%, -50%) rotate(-44.66deg)',
              }}
            ></div>

            <div
              className="absolute border-t-[3px] border-white"
              style={{
                width: '355px',
                height: '0',
                top: '50%', // Center vertically
                left: '50%', // Center horizontally
                transform: 'translate(-50%, -50%) rotate(44.66deg)',
              }}
            ></div>
          </div>
          <div className=" relative w-64 h-64 bg-black rounded-lg flex justify-center items-center">
            <div
              className="absolute border-t-[3px] border-white"
              style={{
                width: '355px',
                height: '0',
                top: '50%', // Center vertically
                left: '50%', // Center horizontally
                transform: 'translate(-50%, -50%) rotate(-44.66deg)',
              }}
            ></div>

            <div
              className="absolute border-t-[3px] border-white"
              style={{
                width: '355px',
                height: '0',
                top: '50%', // Center vertically
                left: '50%', // Center horizontally
                transform: 'translate(-50%, -50%) rotate(44.66deg)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_page;
