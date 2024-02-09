export const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className="mt-8 w-full space-y-2 bg-black px-8 md:px-[300px] flex md:flex-row flex-col items-start justify-between text-sm md:text-md md:space-y-0 py-8">
        <div className="text-white flex flex-col space-y">
          <p>Featured Blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>
        <div className="text-white flex flex-col">
          <p> Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>
        <div className="text-white flex flex-col">
          <p> Privacy Policy</p>
          <p>About Us</p>
          <p>Terms and Condition</p>
        </div>
      </div>
      <p className="py-2 pb-6 text-center text-white bg-black text-sm ">
        All rights reserved @BlogMarket {date.getFullYear()}
      </p>
    </>
  );
};

export default Footer;
