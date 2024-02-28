import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div className="border py-3 rounded flex justify-between">
      <div>
        <Link
          to="/"
          className="pl-6 self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
        >
          Softypy Admin
        </Link>
      </div>
      <div className="pr-6">
        <button>
          <FaUserCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default MainNavbar;
