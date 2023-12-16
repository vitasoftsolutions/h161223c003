import { useEffect, useState } from "react";
import {
  FaHandHoldingUsd,
  FaMobileAlt,
  FaRegListAlt,
  FaUsersCog,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import {
  MdAdminPanelSettings,
  MdInstallMobile,
  MdOutlineAddBusiness,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbFileSettings } from "react-icons/tb";
import {
  BsCalendar2Check,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { GoPasskeyFill } from "react-icons/go";
import { SiFlatpak } from "react-icons/si";
import { Link } from "react-router-dom";

const Menus = [
   // HRM
   {
    title: "Hrm",
    icons: <FaHandHoldingUsd />,
    subMenus: [
      {
        title: "Attendance",
        icons: <BsCalendar2Check />,
        to: "/attendance",
      },
      {
        title: "Leaves",
        icons: <FaMoneyCheckDollar />,
        to: "/leaves",
      },
      {
        title: "Salaries",
        icons: <FaMoneyCheckDollar />,
        to: "/salary",
      },
    ],
  },
// Employee
{
  title: "Employee",
  icons: <FaUsersCog />,
  subMenus: [
    {
      title: "Employee",
      icons: <FaUsersCog />,
      to: "/employee",
    },
  ],
},
// Roles
{
  title: "Roles",
  icons: <FaMoneyCheckDollar />,
  subMenus: [
    {
      title: "Roles",
      icons: <FaMoneyCheckDollar />,
      to: "/roles",
    },
  ],
},
 // Phone number
 {
  title: "Phone",
  icons: <FaMobileAlt />,
  subMenus: [
    {
      title: "Phone",
      icons: <MdInstallMobile />,
      to: "/phone",
    },
  ],
},
 // Utilities
 {
  title: "Utilities",
  icons: <FiSettings />,
  subMenus: [
    {
      title: "App Label",
      icons: <FiSettings />,
      to: "/app-label",
    },
    {
      title: "Types",
      icons: <FaMoneyCheckDollar />,
      to: "/types",
    },
  ],
},



];

const SideBar = ({ open, setOpen }) => {
  const [expandedMenus, setExpandedMenus] = useState([]);

  const handleToggleSubMenu = (index) => {
    const expandedMenusCopy = [...expandedMenus];
    if (expandedMenusCopy.includes(index)) {
      // Remove index if already expanded
      expandedMenusCopy.splice(expandedMenusCopy.indexOf(index), 1);
    } else {
      // Add index if collapsed
      expandedMenusCopy.push(index);
    }
    setExpandedMenus(expandedMenusCopy);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once on component mount to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-10 bg-erp_menu min-h-full">
      <div
        className={`${
          open ? "w-60" : "w-20 "
        } shadow-xl shadow-blue-200 min-h-[100vh] pb-10 relative duration-300`}
      >
        <img
          src="/image/control.png"
          className={`absolute cursor-pointer -right-3 top-20 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <ul className="pt-10">
          {Menus?.map((Menu, index) => (
            <div key={index}>
              {Menu.subMenus && Menu.subMenus.length > 0 ? (
                <div>
                  <div
                    className={`text-lg w-full font-medium cursor-pointer flex justify-between ${
                      !open && "justify-center pl-8 py-2"
                    } py-1 px-4`}
                    onClick={() => handleToggleSubMenu(index)}
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-erp_menu_icons">{Menu.icons} </p>
                      <span
                        className={`${
                          !open && "hidden scale-0 "
                        } origin-left duration-200 text-md text-erp_menu_text`}
                      >
                        {Menu.title}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`${
                          !open && "hidden scale-0"
                        } origin-left duration-200`}
                      >
                        {expandedMenus.includes(index) ? "-" : "+"}
                      </span>
                    </div>
                  </div>
                  <ul
                    className={`${
                      expandedMenus.includes(index)
                        ? "max-h-screen transition-max-h duration-[2s] ease-in-out"
                        : "max-h-0 transition-max-h duration-[1s] ease-in-out"
                    } overflow-hidden`}
                  >
                    {Menu.subMenus.map((submenu, subIndex) => (
                      <Link key={subIndex} to={submenu.to}>
                        <li
                          className={`flex pb-1 rounded-md cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 py-1 px-6 ${
                            subIndex === 0 && "bg-light-white"
                          }`}
                        >
                          <span className="pl-4 text-erp_submenu_icons">
                            {submenu.icons}
                          </span>
                          <span
                            className={`${
                              !open && "hidden scale-0"
                            } origin-left duration-200 text-md text-erp_submenu_text`}
                          >
                            {submenu.title}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link key={index} to={Menu.to}>
                  <li
                    className={
                      "selection:font-medium font-semibold text-lg overflow-hidden"
                    }
                  >
                    <div
                      className={`flex justify-between rounded-2xl py-1 px-4 ${
                        !open && "justify-center pl-8 py-2"
                      }`}
                    >
                      <div className="flex  items-center gap-2">
                        {Menu.icons}{" "}
                        <span
                          className={`${
                            !open && "hidden scale-0"
                          } origin-left duration-200`}
                        >
                          {Menu.title}
                        </span>
                      </div>
                    </div>
                  </li>
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
