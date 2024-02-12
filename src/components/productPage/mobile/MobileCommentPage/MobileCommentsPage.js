import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import MobileCommentCard from "./MobileCommentCard";
import { useRouter } from "next/router";

const MobileCommentsPage = ({ setShowCommentsPage }) => {
  const router = useRouter();
  return (
    <div className='absolute min-h-full w-full pb-4 bg-gray-100 z-40'>
      <div className='bg-white p-8 pb-1 flex justify-between rounded-b-lg'>
        <div className='flex items-start justify-start gap-3'>
          <button onClick={() => setShowCommentsPage(false)}>
            <ArrowRightIcon className='h-7 w-7 text-regalBlue' />
          </button>
          <div>
            <h1 className='text-gray-900 font-medium text-base'>
              نظرات کاربران (35)
            </h1>
            <span className='text-gray-700 font-normal text-[10px]'>
              در مورد این کالا نظر بدهید یا سوالاتتان را بپرسید
            </span>
          </div>
        </div>
        <div>
          <button>
            <BarsArrowDownIcon className='h-7 w-7 text-regalBlue' />
          </button>
        </div>
      </div>
      <div>
        {DUMMY_COMMENTS.map((item, i) => {
          return <MobileCommentCard key={item.shopName} item={item} />;
        })}
      </div>
      <button className='fixed bottom-10 left-6 bg-regalBlue text-white flex gap-2 p-2 rounded-full font-bold '>
        <ChatBubbleLeftEllipsisIcon className='h-6 w-6 ' />
        ثبت نظر
      </button>
    </div>
  );
};

export default MobileCommentsPage;

const DUMMY_COMMENTS = [
  {
    productName: "مرغ کشتار روز زربال دو کیلوگرمی",
    shopName: "مرغ پیمان",
    rate: "5.0",
    date: "20 فروردین 1402",
    userName: "احمد رحمانی (خریدار)",
    discription: "ممنون از فروشگاه خوب شما",
    reply: [
      {
        userName: "کاربر 1",
        discription:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      },
      {
        userName: "کارشناس سایت",
        discription: "سلام احمد عزیز، ممنون از وقتی که برای ما گذاشته اید.",
      },
    ],
  },
  {
    productName: "مرغ کشتار روز زربال دو کیلوگرمی",
    shopName: "مرغ نارمک",
    rate: "3.0",
    date: "20 فروردین 1402",
    userName: "کاربر سایت",
    discription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    reply: [
      {
        userName: "کاربر 1",
        discription:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      },
      {
        userName: "کارشناس سایت",
        discription: "سلام احمد عزیز، ممنون از وقتی که برای ما گذاشته اید.",
      },
    ],
  },
];
