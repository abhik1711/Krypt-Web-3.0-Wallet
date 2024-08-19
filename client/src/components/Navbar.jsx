import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { FaExchangeAlt, FaBook } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, icon, classprops }) => (
  <li className={`mx-4 cursor-pointer flex items-center ${classprops}`}>
    {icon && <span className="mr-2">{icon}</span>}
    {title}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-between items-center p-4 gradient-bg-services">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <NavBarItem title="Market" icon={<FaBook />} />
        <NavBarItem title="Exchange" icon={<FaExchangeAlt />} />
        <NavBarItem title="Tutorials" icon={<IoMdWallet />} />
        <NavBarItem title="Wallets" icon={<AiOutlineUser />} />
        <li className="bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-7 mx-4 rounded-full cursor-pointer text-white font-semibold shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center">
          <AiOutlineUser className="mr-2" />
          Login
        </li>
      </ul>
      <div className="md:hidden flex items-center">
        {!toggleMenu ? (
          <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(true)} />
        ) : (
          <AiOutlineClose fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
      </div>
      {toggleMenu && (
        <ul
          className="fixed top-0 right-0 p-3 w-full h-screen bg-gradient-to-br from-[#000] to-[#333] shadow-2xl list-none flex flex-col justify-start items-end rounded-md text-white animate-slide-in"
        >
          <li className="text-xl w-full my-2 flex justify-end">
            <AiOutlineClose onClick={() => setToggleMenu(false)} />
          </li>
          <NavBarItem title="Market" icon={<FaBook />} classprops="my-2 text-lg" />
          <NavBarItem title="Exchange" icon={<FaExchangeAlt />} classprops="my-2 text-lg" />
          <NavBarItem title="Tutorials" icon={<IoMdWallet />} classprops="my-2 text-lg" />
          <NavBarItem title="Wallets" icon={<AiOutlineUser />} classprops="my-2 text-lg" />
          <li className="bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-7 mx-4 rounded-full cursor-pointer text-white font-semibold shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center mt-4">
            <AiOutlineUser className="mr-2" />
            Login
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
