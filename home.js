import React,{useState} from "react";
import Nav from "./navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./footer";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Home = ()=>{
    const [activeIndex, setActiveIndex] = useState(0);

  // Items for the carousel
  const items = [
    <div className="carousel-item">
        <img className="w-20 h-10" src="video-conferencing.png" alt="Item 1" />
        <p>Data Analytics</p>
    </div>,
    <div className="carousel-item">
        <img className="w-20 h-10" src="video-conferencing.png" alt="Item 2" />
        <p>Web Development</p>
    </div>,
    <div className="carousel-item">
      <img className="w-20 h-10" src="video-conferencing.png" alt="Item 3" />
      <p>JS</p>
    </div>,
    
    // Add more items as needed
  ];

  

  const whoweare = [

        <div className="carousel-container">
        <div className="py-2 w-64 h-56 rounded-md flex flex-col gap-4 px-4 bg-gray-700 bg-opacity-80">
        <div className="flex items-center gap-4">
        <img className="w-20 h-20" src="video-conferencing.png" alt="Item 1" />
        <p className="text-white">Dedicated Team</p>
        </div>
        <p className="text-gray-300">For years of experience, technical expertise, and tailored solutions, trust in Sade tech</p>

        </div>

    </div>,
            <div className="carousel-container">
            <div className="py-2 w-64 h-56 rounded-md flex flex-col gap-4 px-4  bg-gray-700 bg-opacity-80">
            <div className="flex items-center gap-4">
            <img className="w-20 h-20" src="video-conferencing.png" alt="Item 1" />
            <p className="text-white">IT Consultancy</p>
            </div>
            <p className="text-gray-300">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
    
            </div>
    
        </div>,
        <div className="carousel-container">
        <div className="py-4 w-64 h-56 rounded-md flex flex-col gap-4 px-4  bg-gray-700 bg-opacity-80">
        <div className="flex items-center gap-4">
        <img className="w-20 h-20" src="video-conferencing.png" alt="Item 1" />
        <p className="text-white">QA Testing</p>
        </div>
        <p className="text-gray-300">Our Sade techno services are designed to ensure that software and business projects....</p>

        </div>

    </div>,
    
    // Add more items as needed
  ];


  // Handle Previous and Next
  const handlePrev = () => {
    if (items.length > 0) {
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  };
  
  const handleNext = () => {
    if (items.length > 0) {
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  };
  
    return(
        <div>
        <Nav />
        <div className="bg-white flex flex-col xs:gap-10 lg:gap-20">
            <div className="w-full p-10  flex flex-col gap-4 items-center">
            <p className="lg:text-4xl xs:text-2xl font-semibold text-center text-bgblack">The tool you need to <span className="text-action">build your software</span></p>
            <p className="text-para xs:text-sm w-5/6 lg:text-md text-center">A Sade techno solutions and services company that does great work <br/>
            We are a fast-growing IT company in India, providing one-stop IT solutions and services with a professional approach.</p>
            <img className="w-5/6 lg:h-[30rem]" src="video-conferencing.png" alt="Item 1" />
            </div>
            <div className="flex justify-center items-center text-bgblack text-2xl font-semibold">
    <p>Loved by Product-led Teams</p>
    </div>
            <div className="carousel-container">

      <AliceCarousel
        activeIndex={activeIndex}
        onSlideChanged={({ item }) => setActiveIndex(item)}
        items={items}
        disableDotsControls={true} // Disable dots controls
        disableButtonsControls={false} // Disable the default controls
        mouseTracking
        infinite
        autoPlay
  
        autoPlayInterval={2000} // Auto play interval in ms
        responsive={{
          0: {
            items: 1, // Show 1 item on small screens
          },
          768: {
            items: 2, // Show 2 items on medium screens
          },
          1024: {
            items: 3, // Show 3 items on larger screens
          },
        }}
      />
<style jsx global>{`
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: #212323;
    border: 1px solid #ffffff; /* Ensures a visible border */
    color: #ffffff; /* Sets the text/icon color */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .alice-carousel__prev-btn {
    left: 10px; /* Spacing from the left corner */
  }

  .alice-carousel__next-btn {
    right: 10px; /* Spacing from the right corner */
  }

  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff; /* Ensures the icon inside the button is white */
  }

  .alice-carousel__prev-btn-item svg,
  .alice-carousel__next-btn-item svg {
    fill: #ffffff; /* Ensures the SVG icon fill is white */
  }
`}</style>

      
    </div>
            <div className="flex flex-col xs:gap-16 lg:gap-20">
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center xs:gap-8 lg:gap-16'>
                <div className="lg:w-1/4 xs:w-5/6 xs:text-center lg:text-left xs:items-center lg:items-start flex text-bgblack flex-col xs:gap-2 lg:gap-4">
                    <p className="lg:text-4xl xs:text-xl font-semibold">IT Solutions</p>
                    <span className="text-wrap  lg:text-base text-para">Deliver IT solutions with dedication and professionalism, ensuring efficiency, compliance, and a focus on exceptional results tailored to client needs.</span>
               <button className="bg-action xs:text-xs text-white lg:text-base font-semibold rounded-md w-max px-4 py-2 border-md">Try now</button>
                </div>
                <div className="xs:w-5/6 lg:w-1/2">
                    <img src="video-conferencing.png" />
                </div>

            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center xs:gap-8 lg:gap-16'>

                <div className="xs:w-5/6 lg:w-1/2">
                    <img src="video-conferencing.png" />
                </div>
                <div className="lg:w-1/4 xs:w-5/6 xs:text-center lg:text-left xs:items-center lg:items-start flex text-bgblack flex-col xs:gap-2 lg:gap-4">
                    <p className="lg:text-4xl xs:text-xl font-semibold">IT Security Services</p>
                    <span className="text-wrap  lg:text-base text-para">Implement IT solutions with precision and dedication, ensuring compliance with industry standards while delivering reliable and high-value results.</span>
               <button className="bg-action xs:text-xs text-white lg:text-base font-semibold rounded-md w-max px-4 py-2 border-md">Learn more</button>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center xs:gap-8 lg:gap-16'>
                <div className="lg:w-1/4 xs:w-5/6 xs:text-center lg:text-left xs:items-center lg:items-start flex text-bgblack flex-col xs:gap-2 lg:gap-4">
                    <p className="lg:text-4xl xs:text-xl font-semibold">Digital Marketing</p>
                    <span className="text-wrap  lg:text-base text-para">Provide IT solutions with a commitment to quality and efficiency, ensuring seamless integration and reliable results that align with client objectives.</span>
               <button className="bg-action xs:text-xs text-white lg:text-base font-semibold rounded-md w-max px-4 py-2 border-md">Learn more</button>
                </div>
                <div className="xs:w-5/6 lg:w-1/2">
                    <img src="video-conferencing.png" />
                </div>

            </div>

            </div>
            <div className="flex w-full justify-center">
            <div className="w-5/6 h-80 hidden lg:flex">
                <div className="w-1/2 text-white  justify-center  flex flex-col gap-5 p-10 bg-action">
                <p className="text-3xl font-semibold">Get Started!</p>
                <span className=" tet-sm">Act with dedication and diligence, adhering to standards and striving for meaningful and effective outcomes.</span>
                <button className="w-max bg-white text-action p-2 rounded-md">Contact Us Now</button>
                </div>
                <div className="w-1/2 bg-white">
                 <img className="w-full h-full" src="home.png" />
                </div>
            </div>
            </div>

    <div className="flex justify-center items-center text-bgblack text-2xl font-semibold">
    <p>WHO ARE WE</p>
    </div>

    <div className="carousel-container relative flex justify-center items-center w-full bg-azure">

  <AliceCarousel
    activeIndex={activeIndex}
    onSlideChanged={({ item }) => setActiveIndex(item)}
    items={whoweare}
    disableDotsControls={true}
    disableButtonsControls={false}
    mouseTracking
    infinite
    autoPlay
    autoPlayInterval={2000}
    responsive={{
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    }}
    className="flex justify-center items-center" // Center carousel content
  />
<style jsx global>{`
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: #212323;
    border: 1px solid #ffffff; /* Ensures a visible border */
    color: #ffffff; /* Sets the text/icon color */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .alice-carousel__prev-btn {
    left: 10px; /* Spacing from the left corner */
  }

  .alice-carousel__next-btn {
    right: 10px; /* Spacing from the right corner */
  }

  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff; /* Ensures the icon inside the button is white */
  }

  .alice-carousel__prev-btn-item svg,
  .alice-carousel__next-btn-item svg {
    fill: #ffffff; /* Ensures the SVG icon fill is white */
  }
`}</style>

</div>

<Footer />
        </div>
        </div>
    )
}

export default Home;