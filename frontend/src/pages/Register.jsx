import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { Url } from "../Url";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(Url + "/api/auth/register", {
        username,
        email,
        password,
      });
      setEmail(res.data.email);
      setUsername(res.data.username);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
      console.log(res.data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  console.log(URL);
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 font-family-poppins ">
        <h1 className="text-xl font-extrabold">
          <Link to="/">Blog Market</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[70vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold  "> Create an account </h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-tl-lg rounded-tr-lg"
            type="text"
            placeholder="Enter your usename"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-bl-lg rounded-br-lg "
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-2.5 text-lg font-thin text-white bg-black rounded-bl-lg rounded-br-lg hover:bg-gray-100 hover:text-black"
          >
            Sign up
          </button>
          {error && (
            <h3 className="text-red-500 text-sm">Something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-3 ">
            <p> Already have an account ?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/register">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Register;
