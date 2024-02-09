/* eslint-disable react/prop-types */
import { ImageFolder } from "../Url";
const ProfilePosts = ({ p }) => {
  console.log("rendering", p);
  return (
    <div className="w-full flex mt-10 space-x-4 font-poppins font-thin">
      {/** Left Div*/}
      <div className="w-[35%] h-[250px] flex justify-center items-center">
        <img
          alt=""
          src={ImageFolder + p.photo}
          className="h-full w-full object-cover"
        />
      </div>
      {/*Right div */}
      <div className="flex flex-col w-[65%] ">
        <h2 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {p.title}
        </h2>
        <div className="flex mb-2 text-sm fint-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{p.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(p.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(p.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-small md:text-lg ">{p.description}</p>
      </div>
    </div>
  );
};

export default ProfilePosts;
