
import { FaHome, FaUser, FaBell, FaCog } from "react-icons/fa";
import { RiReceiptLine } from "react-icons/ri";


import MenuItem from "../component/MenuItem.component";


const Header = () => {
    return (
      <header className="bg-gradient-to-r from-blue-900 to-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center   ">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#" className="flex items-center gap-2">
              <span className="bg-white text-blue-500 rounded-full p-2">
                <RiReceiptLine size={20} />
              </span>
              <span>MyApp</span>
            </a>
          </div>
  
          {/* Menu */}
          <nav>
            <ul className="flex space-x-6 items-center">
              <MenuItem icon={<FaHome />} label="Home" />
              <MenuItem icon={<FaUser />} label="Profile" />
              <MenuItem icon={<FaBell />} label="Notifications" />
              <MenuItem icon={<FaCog />} label="Settings" />
            </ul>
          </nav>
        </div>
      </header>
    );
  };

  export default Header