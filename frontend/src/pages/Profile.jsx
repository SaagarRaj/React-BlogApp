import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start ">
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold font-poppins mb-4 md:mt-8">
            Your Posts
          </h1>
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
        </div>
        <div className="flex md:sticky top-16 justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">
          <div className="flex flex-col space-y-4 items-start">
            <h1 className="text-xl font-bold font-poppins mb-4">Profile </h1>

            <input
              className="outline-none px-4 py-2 text-gray-500 shadow-sm w-full"
              placeholder="Your username "
              type="text"
            />
            <input
              className="outline-none px-4 py-2 text-gray-500 shadow-sm w-full"
              placeholder="Your email "
              type="email"
            />
            <input
              className="outline-none px-4 py-2 text-gray-500 shadow-sm w-full"
              placeholder="Your password "
              type="password"
            />

            <div className="flex items-center space-x-4 mt-8">
              <button className="text-white font-thin bg-black px-4 py-2 hover:text-black hover:bg-gray-400 font-poppins">
                Update
              </button>
              <button className="text-white font-thin bg-black px-4 py-2 hover:text-black hover:bg-gray-400 font-poppins">
                {" "}
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
