import React from "react";

const TabBar = ({ status, tabChangeHandler, current, deliverd, canceld }) => {
  return (
    <div className='sticky top-[8.5%] '>
      <div className=' '>
        <div className='min-h-[3rem]  bg-white flex  '>
          <div className='flex w-full  items-center  justify-between text-base font-medium text-BlueWhale '>
            <button
              onClick={() => tabChangeHandler(0)}
              className={`w-full h-full flex justify-center items-center gap-1 transition-all duration-300  ${
                status === 1 ? "bg-BlueWhale " : ""
              }`}
            >
              جاری <span className='text-[10px]'>({current})</span>
            </button>
            <button
              onClick={() => tabChangeHandler(1)}
              className={`w-full h-full flex justify-center items-center gap-1 transition-all duration-300 ${
                status === 0 ? "bg-BlueWhale " : " "
              }`}
            >
              تحویل شده <span className='text-[10px]'>({deliverd})</span>
            </button>
            {/* <button
              onClick={() => tabChangeHandler(0)}
              className={`w-full h-full flex justify-center items-center gap-1 transition-all duration-300   ${
                status === 0 ? "bg-BlueWhale " : " "
              }`}
            >
              لغو شده <span className='text-[10px]'>({canceld})</span>
            </button> */}
          </div>
        </div>
        <div className='overflow-hidden flex transition-all duration-300'>
          <div
            className={`h-[2px] w-1/2 bg-regalBlue transition-all duration-300 ${
              status === 1 && " -translate-x-[100%] "
            } ${status === 0 && " translate-x-0 "}`}
          />
        </div>
      </div>
    </div>
  );
};

export default TabBar;
