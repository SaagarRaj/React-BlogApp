/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Url } from "../Url";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";
function PostDetails() {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const [loader, setLoader] = useState(false);
  console.log(postId);
  const { user } = useContext(UserContext);
  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(Url + "/api/posts/" + postId);
      // console.log(res.data)
      setPost(res.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div className="font-popins">
      <Navbar />
      {loader ? (
        <div className="h-[80vh] flex justify-center items-center w-full">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8 ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-poppins md:text-3xl ">
              {post.title}
            </h1>
            {/* post button div */}
            {user?._id === post?.userId && (
              <div className="flex items-center justify-center space-x-2 ">
                <p>
                  <BiEdit />
                </p>
                <p>
                  <MdDelete />
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-4 ">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img
            src={post.photo}
            className="w-full mx-auto mt-8"
            alt=""
            loading="lazy"
          />
          <p className="mx-auto mt-8  font-thin"> {post.description} </p>
          <div className="flex items-center mt-8 space-x-4 font-semibold ">
            <p>Categories:</p>
            <div className="flex justify-center font-poppins items-center space-x-2">
              {post.categories?.map((c, i) => (
                <>
                  <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">
                    {c}
                  </div>
                </>
              ))}
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
      )}
      <Footer />
    </div>
  );
}

export default PostDetails;
