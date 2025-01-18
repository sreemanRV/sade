import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Nav = () => {
     const [openMenu,setOpenMenu] = useState(false)

     const handleMenu = ()=>{
        setOpenMenu(!openMenu)
     }

    return (
        <nav className="flex relative top-0 sticky z-10 items-center bg-white justify-between w-full h-16 px-4">
            <div className="flex flex-col items-center"><img className="w-24 h-8" src="sade.png" />
            <span class="font-poppins text-small-size text-logo font-bold">
 TECHNO SOLUTIONS PVT LTD
</span>
</div>
            <div className=" xs:hidden lg:flex text-sm items-center gap-12">
                        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'text-action' : '')}
                >
                    Home
                </NavLink>
                        <NavLink to="/about-us" onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'text-action' : '')}
                >
                    About Us
                </NavLink>
                         <NavLink to="/services" onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'text-action' : '')}
                >
                    Services
                </NavLink>
                        <NavLink to="/projects" onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'text-action' : '')}
                >
                    Projects
                </NavLink>
                      <NavLink to="/contact-us" onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'text-action' : '')}
                >
                    Contact Us
                </NavLink>
            </div>
            <button className="bg-action xs:hidden lg:block text-sm text-white py-2 px-6 rounded-md">
                Free Consulting
            </button>
            <div className="lg:hidden xs:flex flex-col ">
  <Icon 
    onClick={handleMenu} 
    className="w-6 h-6 text-action cursor-pointer" 
    icon="material-symbols:menu-rounded" 
  />
  {openMenu && (
    <div className="absolute right-0 top-full w-40 max-w-xs bg-white shadow-md border border-gray-200 z-50">
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'text-action px-4 py-2 bg-action bg-opacity-5 block  text-sm' : ' text-sm block hover:bg-action hover:bg-opacity-5  px-4 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about-us" 
        className={({ isActive }) => (isActive ? 'text-action px-4 py-2 bg-action bg-opacity-5 block  text-sm' : ' text-sm block hover:bg-action hover:bg-opacity-5  px-4 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        About Us
      </NavLink>
      <NavLink 
        to="/services" 
        className={({ isActive }) => (isActive ? 'text-action px-4 py-2 bg-action bg-opacity-5 block  text-sm' : ' text-sm block hover:bg-action hover:bg-opacity-5  px-4 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        Services
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => (isActive ? 'text-action px-4 py-2 bg-action bg-opacity-5 block  text-sm' : ' text-sm block hover:bg-action hover:bg-opacity-5  px-4 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        Projects
      </NavLink>
      <NavLink 
        to="/contact-us" 
        className={({ isActive }) => (isActive ? 'text-action px-4 py-2 bg-action bg-opacity-5 block  text-sm' : ' text-sm block hover:bg-action hover:bg-opacity-5  px-4 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        Contact Us
      </NavLink>
    </div>
  )}
</div>


        </nav>
    );
};

export default Nav;
