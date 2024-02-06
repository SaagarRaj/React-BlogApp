import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Url } from "../Url";
import axios from "axios";
const Menu = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      const res = await axios.get(Url + "/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-4 md:right-32">
      {user ? (
        <>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer ">
            Profile
          </h3>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer ">
            Write
          </h3>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer">
            My Blogs
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
            Login
          </h3>
          <h3 className="text-white text-sm hover:text-gray-500 font-thin cursor-pointer ">
            Register
          </h3>
        </>
      )}
    </div>
  );
};

export default Menu;

// <></> jsx fragment
