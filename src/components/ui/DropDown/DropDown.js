import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect, useRef } from "react";

const DropDown = ({ list, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionSelect = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className='flex'>
      <div className='relative w-full' ref={dropdownRef}>
        <button
          className={`w-full h-full px-2  rounded-md focus:outline-none text-gray-400 text-xs flex 
          ${selectedOption ? "justify-between" : "justify-end"}
          py-1 `}
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption.title : ""}
          <ChevronDownIcon className='h-4 w-4 text-gray-400' />
        </button>

        <ul
          className={`w-full absolute bg-white text-xs
        ${
          isOpen
            ? "opacity-100 visible translate-x-0 translate-y-0"
            : "opacity-0 invisible translate-x-0 translate-y-5"
        } 
        transition-all duration-300 rounded-md shadow-md mt-1`}
        >
          {list?.map((item, i) => {
            return (
              <li
                className='px-4 py-2 cursor-pointer hover:bg-gray-200 border-b'
                onClick={() => handleOptionSelect(item)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      {/* <button className=''>
        <ChevronDownIcon className='h-4 w-4 text-gray-400' />
      </button> */}
    </div>
  );
};

export default DropDown;
