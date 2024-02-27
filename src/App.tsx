import "./App.css";
import { MdManageAccounts, MdOutlineDashboard } from "react-icons/md";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuSheet } from "react-icons/lu";
import { FcLeave } from "react-icons/fc";
import { GoSignOut } from "react-icons/go";
import { RiNotificationLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import MainNavbar from "./components/MainNavbar";

function App() {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    {
      name: "Manage Employee",
      link: "/manage-employee",
      icon: MdManageAccounts,
    },
    { name: "Attendence", link: "/", icon: LuSheet },
    { name: "Leave", link: "/", icon: FcLeave },
    { name: "Notice", link: "/", icon: RiNotificationLine },
    { name: "Tasks", link: "/", icon: FaTasks },
    { name: "Settings", link: "/", icon: CiSettings, margin: true },
    { name: "Sign out", link: "/", icon: GoSignOut },
  ];
  return (
    <>
      <MainNavbar />
      <section className="flex gap-6">
        <div
          className={`bg-[#fffbfb] min-h-screen border border-t-0 ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-900 px-4`}
        >
          <div className="py-3 flex justify-end border-b">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-lg gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-black font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="m-3 w-full text-2xl text-gray-900 font-semibold">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default App;
