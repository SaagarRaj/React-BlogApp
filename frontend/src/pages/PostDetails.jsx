import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";
function PostDetails() {
  return (
    <div className="font-popins">
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold font-poppins md:text-3xl ">
            Blog Title - How to crack an coding interview
          </h1>
          <div className="flex items-center justify-center space-x-2 ">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4 ">
          <p>@UserId</p>
          <div className="flex space-x-2">
            <p>Date:25-01-24</p>
            <p>Time: 19:47</p>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/13398438/pexels-photo-13398438.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          className="w-[80%] mx-auto mt-8"
          alt=""
          loading="lazy"
        />
        <p className="mx-auto mt-8  font-thin">
          {" "}
          Blog content:Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.{" "}
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold ">
          <p>Categories:</p>
          <div className="flex justify-center font-poppins items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">interview</div>
          </div>
        </div>
        <div className="flex flex-col ">
          <h3 className="mt-6 mb-4 font-semibold ">Comments:</h3>
          {/* Comments */}
          <Comment />
          {/* Comments */}
          <Comment />
          {/* Comments */}
          <Comment />
        </div>

        {/* Write a comment  */}
        <div className="flex w-full flex-col mt-4 md:flex-row ">
          <input
            className="md:w-[80%]  outline-none px-4 mt-4 md:mt-0"
            type="text"
            placeholder="Write a comment"
          />
          <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] md:mt-0 ">
            {" "}
            Add comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetails;
