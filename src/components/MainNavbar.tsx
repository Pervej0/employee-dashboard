import { Navbar } from "flowbite-react";
import { FaUserCircle } from "react-icons/fa";

const MainNavbar = () => {
  return (
    <Navbar fluid rounded className="border py-3">
      <Navbar.Brand>
        <span className="pl-6 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Softypy Admin
        </span>
      </Navbar.Brand>
      <div className="pr-6">
        <button>
          <FaUserCircle size={30} />
        </button>
      </div>
    </Navbar>
  );
};

export default MainNavbar;
