import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const Comment = () => {
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2 ">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold font-poppins text-gray-600 ">@SRT </h3>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-gray-500 text-sm">27/01/24</p>
          <p className="text-gray-500 text-sm">17:17</p>
          <div className="flex items-center justify-center space-x-2 ">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
      </div>
      <p className="px-4 mt-2"> This is a comment </p>
    </div>
  );
};

export default Comment;
