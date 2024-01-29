import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RxCross2 } from "react-icons/rx";
const EditPosts = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = () => {
    let updatedCategories = [...categories];
    updatedCategories.push(category);
    setCategory("");
    setCategories(updatedCategories);
  };

  const deleteCategory = (i) => {
    let updatedCategories = [...categories];
    updatedCategories.splice(i);
    setCategories(updatedCategories);
  };
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold font-poppins md:text-xl mt-8 ">
          Update a post
        </h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4 ">
          <input
            type="text"
            className="px-4 py-2 outline-none shadow-lg"
            placeholder="Enter post title"
          />
          <input type="file" className="px-4 " />
          <div className="flex flex-col ">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                className="px-4 py-2 outline-none shadow-md"
                placeholder="Enter post category"
                type="text"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-2 py-2 font-poppins font-thin cursor-pointer"
              >
                Add
              </div>
            </div>
            {/* Categories Div */}
            <div className="flex px-4 mt-3">
              {/*Category 1 */}

              <div className="flex px-2 mt-1">
                {categories?.map((c, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center spaxe-x-1 mr-2 bg-gray-200 px-2 py2 rounded-md"
                  >
                    <p className="px-2">{c}</p>
                    <p
                      onClick={deleteCategory}
                      className="text-white bg-gray-600 rounded-full cursor-pointer p-0 text-xs"
                    >
                      <RxCross2 />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <textarea
            rows={15}
            cols={30}
            className="px-4 py-2 shadow-lg"
            placeholder="Wnter post description "
          />
          <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">
            Update
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditPosts;
