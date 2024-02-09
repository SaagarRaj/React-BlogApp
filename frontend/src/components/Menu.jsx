import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Url } from "../Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Menu = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.get(Url + "/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
      navigate("/login");
      //console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-black z-10 w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-4 md:right-32">
      {user ? (
        <>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer ">
            <Link to={"/profile/" + user._id}> Profile </Link>
          </h3>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer ">
            <Link to="/write">Write</Link>
          </h3>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer">
            <Link to={"/myblogs/" + user._id}>My blogs</Link>
          </h3>
          <h3
            onClick={handleLogout}
            className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer"
          >
            Logout
          </h3>
        </>
      ) : (
        <>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer">
            <Link to="/login">Login</Link>
          </h3>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer ">
            <Link to="/register">Register</Link>
          </h3>
        </>
      )}
    </div>
  );
};

export default Menu;

// <></> jsx fragment
