import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        h-44 rounded-lg  w-full lg:w-80 p-8 bg-center
        pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover ">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl font-semibold text-black">$82,452.64</p>
            </div>
          </div>
          <div
            className="
          mt-6">
            <Button
              size="md"
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 gap-1 items-center justify-center flex-wrap">
          {earningData.map((data) => (
            <div
              key={data.title}
              className="bg-white dark:text-gray-200 md:w-56 p-4 pt-9
               dark:bg-secondary-dark-bg rounded-2xl ">
              <button
                type="button"
                style={{
                  color: data.iconColor,
                  background: data.iconBg,
                }}
                className="text-2xl opacity-90 p-4 items-center justify-center rounded-full hover:drop-shadow-xl">
                {data.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{data.amount}</span>
                <span className={`text-sm text-${data.pcColor} ml-2`}>
                  {data.percentage}
                </span>
              </p>
              <p className="text-sm  text-gray-400 mt-1">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-800">
          <div className="flex justify-between">
            <p
              className="font-semibold
            text-xl">
              {' '}
              Revenue Update
            </p>
            <div className="flex items-center gap-4">
              <p className="cursor-pointer gap-2 flex items-center text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="cursor-pointer gap-2 flex items-center text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex  gap-10 flex-wrap justify-evenly">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$100,24</span>
                  <span className="p-2 cursor-pointer ml-3 rounded-full text-white bg-green-400 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$50,24</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor=" "
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="green"
                />
              </div>
              <div className="mt-10">
                <Button
                  color={'white'}
                  bgColor={currentColor}
                  text={'Download Report'}
                  borderRadius={'10px'}
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
