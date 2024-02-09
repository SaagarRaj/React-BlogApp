import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";
import { useContext, useEffect, useState } from "react";
import { Url } from "../Url";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const params = useParams().id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updated, setUpdated] = useState(false);
  const [posts, setPosts] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(user);
  const fetchProfile = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      console.log("user ID", user._id);
      const res = await axios.get(Url + "/api/user/" + user._id);

      setEmail(res.data.email);
      setUsername(res.data.username);
      setPassword(res.data.password);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const handleUserUpdate = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.put(
        Url + "/api/user/" + user._id,
        { username, email, password },
        { withCredentials: true }
      );
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserDelete = async () => {
    setUpdated(false);
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.delete(Url + "/api/user/" + user._id, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
    } catch (error) {
      setUpdated(false);
      console.log(error);
    }
  };

  const fetchUsersPosts = async () => {
    try {
      const res = await axios.get(Url + "/api/posts/user/" + user._id);
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsersPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start ">
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold font-poppins mb-4 md:mt-8">
            Your Posts
          </h1>
          {posts?.map((p) => (
            <ProfilePosts key={p._id} p={p} />
          ))}
        </div>
        <div className="flex md:sticky top-12 justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">
          <div className="flex flex-col space-y-4 items-start">
            <h1 className="text-xl font-bold font-poppins mb-4">Profile </h1>

            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="outline-none px-4 py-2 text-gray-500 shadow-sm w-full"
              placeholder="Your username "
              type="text"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="outline-none px-4 py-2 text-gray-500 shadow-sm w-full"
              placeholder="Your email "
              type="email"
            />
            {/*
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="outline-none px-4 py-2 text-gray-500 shadow-sm w-full"
              placeholder="Your password "
              type="password"
            /> */}

            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={handleUserUpdate}
                className="text-white font-thin bg-black px-4 py-2 hover:text-black hover:bg-gray-400 font-poppins"
              >
                Update
              </button>
              <button
                onClick={handleUserDelete}
                className="text-white font-thin bg-black px-4 py-2 hover:text-black hover:bg-gray-400 font-poppins"
              >
                {" "}
                Delete Account
              </button>
            </div>
            {updated && (
              <h3 className="text-green-500 text-sm text-center mt-4">
                User updated successfully
              </h3>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
