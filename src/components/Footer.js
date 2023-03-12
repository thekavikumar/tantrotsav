import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id='contact'>
      <div className='sm:h-[270px] h-auto w-[100%] bg-gray-800'>
        <div className='p-10'>
          <h1 className='text-center'>Made with 💖 by Tech Team</h1>
          <h1 className='text-center mt-5'>
            2023@copyright{" "}
            <span className=' text-[#3f0]'>All rights are reserved</span>
          </h1>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-5'>
            <h1>
              Email:{" "}
              <a
                href='mailto:tantrotsav@ch.amrita.edu'
                className='text-[#48ff00]'
              >
                tantrotsav@ch.amrita.edu
              </a>
            </h1>
            <h1>
              Phone:{" "}
              <a href='tel:+919025313327' className='text-[#48ff00]'>
                +91 9025313327
              </a>
            </h1>
            <h1>
              Location:{" "}
              <a
                href='https://goo.gl/maps/zjZpcok8QE9cNfeH7'
                className='text-[#0dff00]'
              >
                Google Maps
              </a>
            </h1>
          </div>
        </div>
        {/* <div className='flex gap-5 items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <a href='https://goo.gl/maps/uC66BvzfBZdJUewQ9'>
              <img src={gMap} alt='map' className='h-[30px] w-[30px]' />
            </a>
            <h1>Google Maps</h1>
          </div>
          {/* <img src={gMap} alt="map" className="h-[30px] w-[30px]" />
          <img src={gMap} alt="map" className="h-[30px] w-[30px]" />
          <img src={gMap} alt="map" className="h-[30px] w-[30px]" /> */}
        {/* </div>  */}
      </div>
    </footer>
  );
};
export default Footer;
