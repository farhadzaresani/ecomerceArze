import useRialStyle from "@/hooks/useRialStyle";
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileBasketCardItem = ({ item, updateOrder }) => {
  const [quantity, setQuantity] = useState(item?.quantity);

  useEffect(() => {
    if (quantity == item?.quantity) return;
    const timeoutId = setTimeout(() => {
      updateOrder.mutate({
        itemId: item?.product?.id,
        quan: quantity,
      });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [quantity]);

  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  return (
    <div className="border-b pb-4">
      <div className="  flex justify-between items-center p-8">
        <div className="flex items-start w-[70%]">
          <Image
            className="w-[82px] h-[82px] ml-5 border border-gray-300 rounded-lg"
            // src={item.image}
            src={item?.product?.productimage_set[0]?.url}
            width={82}
            height={82}
            alt=""
          />
          <p className="text-xs font-medium text-[#4B5563]">
            {item?.product?.title}
          </p>
        </div>
        <div className="flex justify-center items-center w-[20%]">
          <XMarkIcon className="w-[12px] h-[12px] ml-2 text-red-600" />
          <p className="text-[9px] font-[500] text-[#4B5563]">
            {item?.quantity}
            <span className="mr-1 text-[9px] font-[500] text-[#4B5563]">
              (عدد)
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between pr-5 pl-5">
        <div className="flex justify-between items-center gap-3 px-2 py-0.5  border border-green-500 rounded ">
          <button onClick={increase}>
            <PlusIcon className="h-4 w-4 text-green-500" />
          </button>

          <input
            className="text-white text-sm text-center bg-green-500 w-4 rounded number-input "
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.valueAsNumber)}
          />
          <button onClick={decrease}>
            {quantity > 0 ? (
              <MinusIcon className="h-4 w-4 text-green-500" />
            ) : (
              <TrashIcon className="h-4 w-4 text-green-500" />
            )}
          </button>
        </div>
        <div>
          <p>{useRialStyle(item?.total_price)} تومان </p>
        </div>
      </div>
    </div>
    // <Link
    //   href={`/product/${item?.product?.unique_product_code}`}
    //   className='flex justify-between  mt-3 '
    // >
    //   <div className='flex items-start gap-1 relative text-xs '>
    //     <Image
    //       width={40}
    //       height={40}
    //       src={
    //         item?.product?.productimage_set?.[0]?.url
    //           ? item?.product?.productimage_set?.[0]?.url
    //           : "/assets/Images/basket/blurImage.png "
    //       }
    //       className='border-[1px] border-navy rounded-md'
    //       alt='basket item'
    //     />
    //     <h3>{item?.product?.title}</h3>
    //     <div className='flex gap-1'>
    //       <span className='text-red-600'>x</span> <h2>{item?.quantity}</h2>
    //       <span className='text-[8px]'>(کیلوگرم)</span>
    //     </div>
    //   </div>
    //   <div className='flex items-center'>
    //     <h4 className='text-xs'>{useRialStyle(item?.total_price)}</h4>
    //     <span className='text-[10px]'>تومان</span>
    //   </div>
    // </Link>
  );
};
export default MobileBasketCardItem;
