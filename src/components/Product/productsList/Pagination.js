import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <div className="bg-red-600 flex">
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="flex">
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        className="flex justify-center items-center "
        // pageClassName='bg-green-500'
        pageLinkClassName="m-auto text-navy"
        pageClassName="  w-10 h-10 text  flex text-navy bg-cream border-[1px] border-white "
        activeLinkClassName="  m-auto   text-white "
        activeClassName=" flex bg-navy text-white bg-navy'"
        nextClassName=" w-10 h-10 flex text-navy bg-cream border-[1px] border-white rounded-l-lg   "
        nextLinkClassName=" m-auto"
        previousClassName=" w-10 h-10 flex text-navy bg-cream border-[1px] border-white rounded-r-lg "
        previousLinkClassName="m-auto"
        breakLinkClassName="m-auto"
        breakClassName="w-10 h-10 flex text-navy bg-cream border-[1px] border-white  "
        breakLabel="..."
        nextLabel="بعدی "
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={32}
        previousLabel="قبلی"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

// Add a <div id="container"> to your HTML to see the component rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container")
// );

// import React, { useState } from "react";
// import {
//   ChevronDoubleLeftIcon,
//   ChevronDoubleRightIcon,
// } from "@heroicons/react/24/outline";

// const Pagination = () => {
//   const [paginateNumber, setPanginateNumber] = useState(1);
//   return (
//     <div className=' my-20 flex items-center flex-wrap'>
//       <nav aria-label='Page navigation'>
//         <ul className='inline-flex items-center'>
//           <li>
//             <ChevronDoubleRightIcon className='h-6 w-6 text-gray-500 ml-2' />
//           </li>
//           <li>
//             <button
//               className='px-4 py-2 text-navy transition-colors duration-150 bg-cream border
//              border-white rounded-r-lg focus:shadow-outline hover:bg-navy hover:text-white'
//             >
//               قبلی
//             </button>
//           </li>
//           <li>
//             <button className='px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0 border-white focus:shadow-outline hover:bg-navy hover:text-white '>
//               ...
//             </button>
//           </li>
//           {[...Array(3)].slice(0, 3).map((item, i) => {
//             const value = paginateNumber > 3 && paginateNumber + i;
//             return (
//               <li key={i} onClick={() => setPanginateNumber(value)}>
//                 <button
//                   className={`px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0
//                  border-white focus:shadow-outline hover:bg-navy hover:text-white ${
//                    paginateNumber == value &&
//                    " text-white bg-navy  hover:text-white "
//                  } `}
//                 >
//                   {value}
//                 </button>
//               </li>
//             );
//           })}
//           <li>
//             <button className='px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0 border-white focus:shadow-outline hover:bg-navy hover:text-white'>
//               ...
//             </button>
//           </li>
//           <li>
//             <button className='px-4 py-2 text-navy transition-colors duration-150 bg-cream border border-r-0 border-white rounded-l-lg focus:shadow-outline hover:bg-navy hover:text-white'>
//               بعدی
//             </button>
//           </li>
//           <li>
//             <ChevronDoubleLeftIcon className='h-6 w-6 text-gray-500 mr-2' />
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Pagination;
