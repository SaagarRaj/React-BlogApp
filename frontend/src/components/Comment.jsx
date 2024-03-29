/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { Url } from "../Url";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

// eslint-disable-next-line no-unused-vars
const Comment = ({ c, post }) => {
  const { user } = useContext(UserContext);
  const handleDelete = async (id) => {
    try {
      await axios.delete(Url + "/api/comments/" + id, {
        withCredentials: true,
      });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2 ">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold font-poppins text-gray-600 ">
          @{c.author}{" "}
        </h3>
        <div className="flex justify-center items-center space-x-4">
          <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
          {/* Delete*/}
          {user?._id === c?.userId ? (
            <div className="flex items-center justify-center space-x-2 ">
              <p className="cursor-pointer" onClick={() => handleDelete(c._id)}>
                <MdDelete />
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <p className="px-4 mt-2"> {c.comment} </p>
    </div>
  );
};

export default Comment;
