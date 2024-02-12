import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function MenuItem(props) {
  return (
    <div {...props} className=' flex justify-end w-[166px] py-2  '>
      <h1
        className={`flex font-bold justify-end pl-4 py-2 text-base cursor-pointer text-navy w-full ${
          props.isopen === 1 && "text-teal-400  bg-gray-100"
        }`}
      >
        {props.title}
        {props.isopen === 1 && (
          <ChevronLeftIcon className='h-5 w-5 text-teal-400' />
        )}
      </h1>
    </div>
  );
}
