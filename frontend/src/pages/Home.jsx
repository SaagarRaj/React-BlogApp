/* eslint-disable react-hooks/exhaustive-deps */
import HomePosts from "../components/HomePosts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Url } from "../Url";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { search } = useLocation();
  console.log(search);
  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(Url + "/api/posts/" + search);
      console.log(res.data);
      //console.log(posts);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(true);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [search]);
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        {loader ? (
          <div className="h-[40vh] flex justify-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => <HomePosts key={post._id} post={post} />)
        ) : (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
