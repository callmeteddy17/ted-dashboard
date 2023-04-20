import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import logo from '../assets/logo1.svg';
import { useStateContext } from '../contexts/ContextProvider';

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 z-50 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center text-xl p-2 flex gap-2 mt-4 tracking-tight dark:text-white text-slate-900">
              <img
                src={logo}
                style={{ color: currentColor }}
                className="w-10 h-10"
              />
              <span className="font-extrabold">TedDy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() => setActiveMenu((prev) => !prev)}
                type="button">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div
            className="
          mt-10 ">
            {links.map((item, i) => (
              <div key={i}>
                <p className="text-gray-400 mt-4 m-3 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`${link.name}`}
                    key={link.name}
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: currentColor }
                        : { backgroundColor: '' }
                    }
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }>
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
