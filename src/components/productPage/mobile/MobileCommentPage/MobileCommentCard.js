import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbDownIcon } from "@heroicons/react/24/outline";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";

const MobileCommentCard = ({ item }) => {
  return (
    <div className='p-4 bg-white mt-2  rounded-b-xl'>
      <div className='border-b-[1px] '>
        <h1 className='font-bold text-sm'>{item.productName}</h1>
        <div className='flex gap-3 mt-3'>
          <div
            className={`text-xs text-white font-bold px-2 py-1 rounded ${
              item.rate > 4 ? "bg-green-500" : "bg-yellow-400"
            } `}
          >
            <span>{item.rate}</span>
          </div>
          <div className='h-4 w-[1px] bg-gray-400' />
          <h3 className='text-gray-500 text-[10px]'>{item.date}</h3>
          <div className='h-4 w-[1px] bg-gray-400' />
          <h3 className='text-gray-500 text-[10px] font-bold'>
            {item.userName}
          </h3>
        </div>
        <div className='flex gap-2 mt-3'>
          <div className='text-gray-400 bg-gray-100 flex justify-center items-center gap-1 p-1 rounded'>
            <span className='text-[7px] font-bold'>پاسخ دهید</span>
            <ArrowUturnLeftIcon className='h-3 w-3 ' />
          </div>
          <div className='text-green-400 bg-gray-100 flex justify-center items-center gap-1 p-1 rounded'>
            <span>1</span>
            <HandThumbUpIcon className='h-5 w-5 text-gray-500' />
          </div>
          <div className='text-gray-400 bg-gray-100 flex justify-center items-center gap-1 p-1 rounded'>
            <span>0</span>
            <HandThumbDownIcon className='h-5 w-5 text-gray-500' />
          </div>
        </div>
        <div className='my-5'>
          <p className='text-gray-600 text-sm'>{item.discription}</p>
        </div>
      </div>
      <div className='mt-6'>
        {item.reply.map((cm, i) => {
          return (
            <div className='mt-4 border-r-2 border-cream px-2'>
              <div>
                <h className='text-sm font-bold text-gray-600'>{cm.userName}</h>
                <p className='text-xs font-normal text-gray-600'>
                  {cm.discription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex items-center gap-1 text-gray-400 mt-4'>
        <BuildingLibraryIcon className='h-5 w-5 ' />
        <h1 className='text-xs'>{item.shopName}</h1>
      </div>
    </div>
  );
};

export default MobileCommentCard;
