import React,{useState} from "react";
import Nav from "./navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./footer";

const Contact = ()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const options = [
      { value: "small", label: "1-50 employees" },
      { value: "medium", label: "51-200 employees" },
      { value: "large", label: "201+ employees" },
    ];
  
    const handleSelect = (option) => {
      setSelectedOption(option.label);
      setIsOpen(false);
    };
    return(
        <div className="bg-white">
            <Nav />
<div className="flex relative bg-bgblack  xs:h-48 lg:h-64 flex-col xs:gap-4 lg:gap-8 items-center overflow-hidden justify-center">
<span className="text-action font-semibold xs:text-xl lg:text-3xl">Drop Us a Line</span>
<div className="flex flex-col lg:flex-row xs:gap-5 lg:gap-20 text-white justify-center">
               <div className="flex w-60 items-start gap-2">
               <Icon className="text-action w-8 h-8" icon="mynaui:location"/>
               <span className="text-xs font-semibold">No 59/8 Madras Building, seshachalam street, Saidapet Chennai -600015</span>
               </div>
               <div className="flex items-center gap-2">
               <Icon className="text-action w-5 h-5" icon="line-md:phone"/>
               <span className="text-xs font-semibold">9003456349</span>
               </div>
               <div className="flex items-center gap-2">
               <Icon className="text-action w-5 h-5" icon="material-symbols:mail-outline"/>
               <span className="text-xs hover:text-action font-semibold"><a href="mailto:sadetechnosolutions@gmail.com">sadetechnosolutions@gmail.com</a></span>
               </div>
</div>
<div className="absolute border-left xs:-left-28 lg:-left-16 xs:-top-24 lg:-top-16 rounded-full h-40 w-40 border-8">

</div>
<div className="absolute border-right xs:-right-28 lg:-right-16 xs:-bottom-24 lg:-bottom-16 rounded-full h-40 w-40 border-8">

</div>
</div>
<div className="h-9 bg-grey">

</div>
<div className="flex items-center justify-center">
<div className="py-10 xs:px-10 flex flex-col lg:flex-row items-center gap-10">
    <div className="lg:w-1/2 xs:w-full flex flex-col gap-4 text-bgblack">
    <span className="text-2xl font-semibold">Need Support?</span>
    <p className="text-xs">Fill in the form to get in touch</p>
<img className="w-full lg:h-[32rem]" src="contact.jpg" />
    </div>
    <form action="#" method="POST" class="space-y-4 lg:w-1/2 flex flex-col gap-4 text-bgblack">
    <div className="flex w-full gap-6">
    <div className="w-1/2">
    <label for="firstname" class="block text-sm font-medium">First Name</label>
    <input placeholder="Enter your First Name"  type="text" id="firstname" name="firstname" class="w-full bg-white p-2 border border-gray-300 rounded-md" required />
  </div>
  <div className="w-1/2">
    <label for="lastname" class="block text-sm font-medium">Last Name</label>
    <input placeholder="Enter your Last Name"  type="text" id="lastname" name="lastname" class="w-full bg-white p-2 border border-gray-300 rounded-md" required />
  </div>
    </div>


  <div>
    <label for="email" class="block text-sm font-medium">Email</label>
    <input placeholder="Enter your Email"   type="email" id="email" name="email" class="w-full bg-white p-2 border border-gray-300 rounded-md" required />
  </div>

  <div>
    <label for="companyname" class="block text-sm font-medium">Company Name</label>
    <input placeholder="Enter your company name" type="text" id="companyname" name="companyname" class="w-full bg-white p-2 border border-gray-300 rounded-md" required />
  </div>

  <div className="relative w-full">
      <label htmlFor="company" className="block text-sm font-medium">
        Company Size
      </label>
      <div
        className="flex items-center bg-white border border-gray-300 rounded-md p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          id="company"
          name="company"
          className="w-full bg-white focus:outline-none"
          placeholder="Select a company size"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <Icon
          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
          className="text-gray-500"
        />
      </div>
      {isOpen && (
        <ul className="absolute  z-10 bg-white border border-gray-300 w-full shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              className="p-2 hover:bg-gray-500 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  <div>
    <label for="help" class="block text-sm font-medium">How can we help you?</label>
    <textarea id="help" name="help" rows="4" class="w-full bg-white p-2 border border-gray-300 rounded-md"></textarea>
  </div>

  <button type="submit" class="w-full bg-action text-white p-2 rounded-md">Submit</button>
</form>
</div>
</div>

<div className="h-9 bg-grey">

</div>
<Footer />

        </div>
    )
}

export default Contact;