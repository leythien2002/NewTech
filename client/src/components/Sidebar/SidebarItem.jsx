import { NavLink } from "react-router-dom";
import {  useState } from "react";
import { ArrowAdmin } from "@/components/Icons";

import { twMerge } from "tailwind-merge";

const SidebarItem = ({ icon, title, to, isActiveSidebar, childrenItem }) => {
  const toggleActiveStyle = isActive => {
    if (isActive) {
      return "flex items-center text-content-title fill-primary-100 bg-[#EEE] rounded-l-[50px] py-[16px] pl-5 relative";
    } else {
      return "flex items-center text-white fill-white py-[18px] pl-5 relative";
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDropdown = () => setIsMenuOpen(!isMenuOpen);


  return (
    <>
      {!childrenItem ?
        <NavLink to={to} className={({ isActive }) => toggleActiveStyle(isActive)}>
          <div className=" w-5 h-5">{icon}</div>
          <p className="pl-3">{isActiveSidebar && title}</p>
          <div className=" right-2 absolute">
            {isActiveSidebar && <ArrowAdmin />}

          </div>
        </NavLink> :
        <>
          <div className="flex items-center text-white fill-white py-[18px] pl-5 relative" onClick={toggleDropdown}>
            <div className=" w-5 h-5">{icon}</div>
            <p className="pl-3">{isActiveSidebar && title}</p>
            <div className=" right-2 absolute">
              {isActiveSidebar && <ArrowAdmin />}

            </div>
          </div>
          {isMenuOpen && (
            <>
            {
              childrenItem.map((item,index) => {
                return <NavLink to={item.to} className={({ isActive }) => twMerge(toggleActiveStyle(isActive),'pl-10')} key={index}>
                <div className="w-5 h-5">{icon}</div>
                <p className="pl-3">{isActiveSidebar && item.title}</p>
                <div className=" right-2 absolute">
                  {isActiveSidebar && <ArrowAdmin />}

                </div>
              </NavLink>
              })
            }
              
            </>
          )}
        </>


      }
    </>
  );
};

export default SidebarItem;
