import Image from "next/image";
import Link from "next/link";

const DeliverdOrders = ({ data }) => {
  return (
    <div className=" h-full mx-2">
      {data?.map((item) => {
        return (
          <div key={item.id} className="mt-4 bg-white w-full rounded-lg p-4  ">
            <div className="flex justify-between items-start">
              <div className="flex gap-2 text-gray-700 ">
                <Image
                  width={60}
                  height={60}
                  src={"/assets/Images/basket/shopLogo.png"}
                  className="border-[1px] border-navy rounded-md"
                  alt="basket"
                />
                <Link
                  href={`supplier/${item?.shop?.shop_unique_id}`}
                  className="text-sm font-bold"
                >
                  {item?.shop?.title}
                </Link>
              </div>
              <div className="text-[10px] font-normal text-green-600 p-1 bg-green-100 rounded ">
                <h2>تحویل شده</h2>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-teal-400 py-2.5 w-full  rounded-lg text-white font-semibold ">
                سفارش مجدد
              </button>
              <button className="bg-white py-2.5 w-full  rounded-lg text-navy font-semibold border-[1px] border-navy">
                مشاهده فاکتور
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeliverdOrders;
