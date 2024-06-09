import { useState } from "react";

const LoginForm = () => {
  const [userLoginData, setUserLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    //
  };

  return (
    <form className="mb-6" onSubmit={HandleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="username"
          className="px-4 py-3 w-full border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300"
          placeholder="Username"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <input
          name="password"
          className="px-4 py-3 w-full border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn h-0 w-full rounded-md bg-black text-white hover:bg-gray-800"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
