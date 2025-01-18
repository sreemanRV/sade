import React,{useState} from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";

const Footer = ()=>{

       const [isOpen, setIsOpen] = useState(false);
       const [selectedOption, setSelectedOption] = useState("English");
       const options = [
         { value: "small", label: "English" },
         { value: "medium", label: "Tamil" },
       ];
     
       const handleSelect = (option) => {
         setSelectedOption(option.label);
         setIsOpen(false);
       };

    return(
      <div className="items-center bg-bgblack lg:px-0 xs:px-5 py-8 flex flex-start flex-col gap-10">

        <div className="flex flex-col lg:flex lg:flex-row lg:flex-wrap w-5/6 xs:gap-10 justify-between">
        <div className="flex w-1/4 gap-4 flex-col">
           <div className="flex flex-col">
            <img src="logo.png" className="w-16 h-9" />
           </div>
           <div className="relative w-28">
            <div
              className="flex items-center bg-white border border-gray-300 rounded-md p-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <input
                id="company"
                name="company"
                className="w-full text-bgblack bg-white focus:outline-none"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <Icon
                icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                className="text-gray-500"
              />
            </div>
            {isOpen && (
              <ul className="absolute text-bgblack z-10 bg-white border border-gray-300 w-full shadow-md">
                {options.map((option) => (
                  <li
                    key={option.value}
                    className="p-2 text-xs hover:bg-gray-500 cursor-pointer"
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
           <div className="flex text-white  flex-col gap-2">
               <span className="text-action text-lg font-semibold">Contact Us</span>
            
               <div className="flex items-start gap-2">
               <Icon className="w-6 h-6" icon="mynaui:location"/>
               <span className="text-xs">No 59/8 Madras Building, seshachalam street, Saidapet Chennai -600015</span>
               </div>
               <div className="flex items-center gap-2">
               <Icon icon="line-md:phone"/>
               <span className="text-xs">9003456349</span>
               </div>
               <div className="flex items-center gap-2">
               <Icon className="" icon="material-symbols:mail-outline"/>
               <span className="text-xs hover:text-action"><a href="mailto:sadetechnosolutions@gmail.com">sadetechnosolutions@gmail.com</a></span>
               </div>
               </div>
               
        </div>
        <div className="text-para flex flex-col gap-2">
           <span className=" text-action text-lg font-semibold">Product</span>
           <span className=" hover:text-action cursor-pointer text-xs">Features</span>
           <span className=" hover:text-action cursor-pointer text-xs">Services</span>
           <span className=" hover:text-action cursor-pointer text-xs">Product updates</span>
           </div>
           <div className="text-para flex flex-col gap-2">
           <span className=" text-action hover:text-action cursor-pointer text-lg font-semibold">Resources</span>
           <span className=" hover:text-action cursor-pointer text-xs">Developers</span>
           <span className=" hover:text-action cursor-pointer text-xs">Privacy</span>
           </div>
           <div className="text-para flex flex-col gap-2">
           <span className=" text-action hover:text-action cursor-pointer text-lg font-semibold">Company</span>
      <span className=" hover:text-action cursor-pointer text-xs">     <NavLink to="/about-us" onClick={() => window.scrollTo(0, 0)}> About us</NavLink></span>
          <span className=" hover:text-action cursor-pointer text-xs"> <NavLink to="/contact-us" onClick={() => window.scrollTo(0, 0)}> Contact us</NavLink></span>

           </div>
        <div className="flex flex-col gap-6">
           <div className="flex flex-col">
           <span className=" text-action text-lg font-semibold">Subscribe to Sade Techno Solutions</span>
           <span className="text-para text-xs">For product announcements and exclusive insights</span>
           </div>
            <div className="flex w-full items-center">
             <input placeholder="Input your email" className="border px-4 w-full text-bgblack placeholder:text-xs h-8 bg-white rounded-bl-md rounded-tl-md" />
             <button className="h-8 px-4 bg-action rounded-br-md rounded-tr-md text-sm font-semibold text-white">Subscribe</button>
            </div>
            <div>
            <span className="text-action text-lg font-semibold">Connect with us</span>
            <div className="flex items-center gap-4">
   <Icon className="w-4 h-4" icon="logos:twitter" />
   <Icon  className="w-4 h-4" icon="logos:facebook" />
   <Icon  className="w-4 h-4" icon="devicon:linkedin" />
   <Icon  className="w-6 h-6 text-red" icon="mdi:youtube" />
   </div>
            </div>

            <div>

     
            </div>
        </div>
   </div>
   <div className="flex justify-center">

   <div className="flex w-full lg:gap-2 xs:text-xs lg:text-base items-center text-para justify-center">
<p>© 2024 Copyright</p>
<Icon icon="mdi:dot" />
<p>All Rights Reserved</p>
<Icon icon="mdi:dot" />
<p>Designed by Sade Techno Solutions</p>
   </div>
   </div>

   </div>
    )
}

export default Footer;