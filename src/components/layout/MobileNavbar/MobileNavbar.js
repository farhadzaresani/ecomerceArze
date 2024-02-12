import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  QueueListIcon,
  ShoppingBagIcon,
  FolderOpenIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as ActiveHomeIcon,
  QueueListIcon as ActiveQueueListIcon,
  ShoppingBagIcon as ActiveShoppingBagIcon,
  FolderOpenIcon as ActiveFolderIcon,
  UserCircleIcon as ActiveUserCircleIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { hasCookie } from "cookies-next";

const MobileNavbar = () => {
  const location = useRouter();
  const isCookie = hasCookie("access", {});
  const href = isCookie ? "/profile" : "/auth";

  const navItems = [
    {
      title: "طرح های من",
      icon: <FolderOpenIcon className='h-6 w-6 text-gray-600' />,
      activeIcon: <ActiveFolderIcon className='h-6 w-6 text-gray-800' />,
      href: "/mySubsidyPlan",
    },
    {
      title: "سبد های خرید",
      icon: <ShoppingBagIcon className='h-6 w-6 text-gray-500' />,
      activeIcon: <ActiveShoppingBagIcon className='h-6 w-6 text-gray-800' />,
      href: "/myBasket",
    },
    {
      title: "سفارشات",
      icon: <QueueListIcon className='h-6 w-6 text-gray-600' />,
      activeIcon: <ActiveQueueListIcon className='h-6 w-6 text-gray-800' />,
      href: "/orders",
    },
    {
      title: "حساب کاربری",
      icon: <UserCircleIcon className='h-6 w-6 text-gray-600' />,
      activeIcon: <ActiveUserCircleIcon className='h-6 w-6 text-gray-800' />,
      href: "/profile",
    },
  ];

  return (
    <div
      className={`md:hidden fixed  bottom-0 w-full bg-white flex justify-around items-center z-40  h-16 px-4 py-0.5 border-t-2
    ${location.pathname.includes("[pid]") && "hidden"} `}
    >
      <Link
        href={"/"}
        className='flex flex-col justify-center items-center gap-2 w-full'
      >
        {location?.pathname === "/" ? (
          <div className='bg-cream px-3 rounded-2xl'>
            {" "}
            <ActiveHomeIcon className='h-6 w-6 text-gray-800' />
          </div>
        ) : (
          <div className='px-3'>
            <HomeIcon className='h-6 w-6 text-gray-600' />
          </div>
        )}
        <span
          className={`text-[10px] ${
            location?.pathname === "/"
              ? "text-gray-800 font-bold"
              : "text-gray-600"
          }  `}
        >
          خانه
        </span>
      </Link>
      {navItems.map((item, i) => {
        return (
          <Link
            href={item.href}
            key={item.title}
            className='flex flex-col justify-center items-center gap-2 w-full'
          >
            {location?.asPath.includes(item.href) ? (
              <div className='bg-cream px-3 rounded-2xl'>{item.activeIcon}</div>
            ) : (
              <div className='px-3'>{item.icon}</div>
            )}
            <span
              className={`text-[10px] ${
                location?.asPath.includes(item.href)
                  ? "text-gray-800 font-bold"
                  : "text-gray-600"
              }  `}
            >
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNavbar;
