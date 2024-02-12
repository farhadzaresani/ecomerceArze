import React, { useState } from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

const Pagination = () => {
  const [paginateNumber, setPanginateNumber] = useState(2);
  const pages = [];
  const calculate = (number) => {
    number == 1 && pages.push(1, 2, 3);
  };

  return (
    <div className=' my-20 flex items-center flex-wrap'>
      <nav aria-label='Page navigation'>
        <ul className='inline-flex items-center'>
          <li>
            <ChevronDoubleRightIcon className='h-6 w-6 text-gray-500 ml-2' />
          </li>
          <li>
            <button
              className='px-4 py-2 text-navy transition-colors duration-150 bg-cream border
             border-white rounded-r-lg focus:shadow-outline hover:bg-navy hover:text-white'
            >
              قبلی
            </button>
          </li>
          <li>
            <button className='px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0 border-white focus:shadow-outline hover:bg-navy hover:text-white '>
              ...
            </button>
          </li>

          <li onClick={() => setPanginateNumber(value)}>
            <button
              className={`px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0
                 border-white focus:shadow-outline hover:bg-navy hover:text-white
                
             
                 `}
            >
              {paginateNumber - 1}
            </button>
          </li>

          <li onClick={() => setPanginateNumber(value)}>
            <button
              className={`px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0
                 border-white focus:shadow-outline hover:bg-navy hover:text-white
                
             
                 `}
            >
              {paginateNumber}
            </button>
          </li>

          <li onClick={() => setPanginateNumber(value)}>
            <button
              className={`px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0
                 border-white focus:shadow-outline hover:bg-navy hover:text-white      
                 `}
            >
              {paginateNumber + 1}
            </button>
          </li>

          <li>
            <button className='px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0 border-white focus:shadow-outline hover:bg-navy hover:text-white'>
              ...
            </button>
          </li>
          <li>
            <button className='px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0 border-white rounded-l-lg focus:shadow-outline hover:bg-navy hover:text-white'>
              بعدی
            </button>
          </li>
          <li>
            <ChevronDoubleLeftIcon className='h-6 w-6 text-gray-500 mr-2' />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
