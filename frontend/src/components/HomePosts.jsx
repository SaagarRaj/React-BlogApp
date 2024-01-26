const HomePosts = () => {
  return (
    <div className="w-full flex mt-10 space-x-4">
      {/** Left Div*/}
      <div className="w-[35%] h-[250px] flex justify-center items-center">
        <img
          alt=""
          src="https://googlechrome.github.io/samples/picture-element/images/kitten-large.png"
          className="h-full w-full object-cover"
        />
      </div>
      {/*Right div */}
      <div className="flex flex-col w-[65%] ">
        <h2 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          Blog Title - How to crack an coding interview
        </h2>
        <div className="flex mb-2 text-sm fint-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@UserId</p>
          <div className="flex space-x-2">
            <p>Date:25-01-24</p>
            <p>Time: 19:47</p>
          </div>
        </div>
        <p className="text-small md:text-lg ">
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
      </div>
    </div>
  );
};

export default HomePosts;
