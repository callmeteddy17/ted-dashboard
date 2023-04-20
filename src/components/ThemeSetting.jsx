import React from 'react';
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSetting = () => {
  const {
    setColor,
    currentMode,
    setThemeSettings,
    setCurrentMode,
    currentColor,
  } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen top-0 right-0 fixed nav-item">
      <div className="float-right h-screen dark:text-gray-200 bg-white w-400 dark:bg-[#484B52]">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}>
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex flex-col border-color border-t-1 p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value={'Light'}
              className="cursor-pointer"
              onChange={() => setCurrentMode('Light')}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="text-md cursor-pointer ml-2">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value={'Dark'}
              className="cursor-pointer"
              onChange={() => setCurrentMode('Dark')}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="text-md cursor-pointer ml-2">
              Dark
            </label>
          </div>
        </div>
        <div className="flex flex-col border-color border-t-1 p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((color, i) => (
              <TooltipComponent
                key={i}
                position="TopCenter"
                content={color.name}>
                <div className="relative flex gap-5 mt-2 cursor-pointer items-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer "
                    type="button"
                    style={{ backgroundColor: color.color }}
                    onClick={() => setColor(color.color)}>
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        color.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
