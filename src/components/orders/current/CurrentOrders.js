import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const CurrentOrders = ({ data }) => {
  const dateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "2-digit",
    day: "2-digit",
  });

  function addDayToCurrentDate(item) {
    let currentDate = new Date(item?.data?.pickup_date_value);
    return new Date(currentDate.setDate(currentDate.getDate() + 3));
  }

  // const day = new Date(item);
  return (
    <div className=" h-full mx-2">
      {data?.map((item) => {
        return (
          <div key={item.id} className="mt-4 bg-white w-full rounded-lg p-4  ">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-2 text-gray-700 ">
                <Image
                  width={60}
                  height={60}
                  src={"/assets/Images/basket/shopLogo.png"}
                  className="border-[1px] border-navy rounded-md"
                  alt="basket"
                />
                <div>
                  <Link
                    href={`supplier/${item?.shop?.shop_unique_id}`}
                    className="text-sm font-bold"
                  >
                    {item?.data?.shop_name}
                  </Link>
                  <div className="w-full flex m-2">
                    {item?.data?.items?.map((item) => {
                      return (
                        <div className="flex flex-col justify-center items-center">
                          <Image
                            src={item?.image[0]}
                            width={30}
                            height={30}
                            className="w-8 h-8 border rounded-md"
                          />
                          <h4 className="flex  text-xs">
                            <sub>
                              <XMarkIcon className="w-3 h-3 text-red-600" />
                            </sub>
                            {item?.quantity}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-normal text-white p-1 bg-teal-400 rounded ">
                <h2>ثبت شده</h2>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                href={`orders/${item?.id}`}
                className="bg-white py-2.5 w-full flex justify-center items-center rounded-lg text-navy font-semibold border-[1px] border-navy"
              >
                مشاهده سفارش
              </Link>
            </div>
            <div className="text-xs font-bold text-teal-700 bg-teal-100 py-1 flex justify-center items-center rounded mt-3">
              <h4 className="flex flex-col justify-center items-center  gap-2">
                زمان تحویل سفارش:{" "}
                <div className="flex gap-2">
                  <span>
                    {dateFormatter?.format(
                      new Date(item?.data?.pickup_date_value)
                    )}
                  </span>
                  تا
                  <span>
                    {dateFormatter?.format(addDayToCurrentDate(item))}
                  </span>
                </div>
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentOrders;
