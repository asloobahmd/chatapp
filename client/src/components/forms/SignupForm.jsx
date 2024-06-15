import { useState } from "react";
import GenderCheckbox from "../GenderCheckbox";
import useSignup from "../../hooks/useSignup";
import Button from "../Button";

const SignupForm = () => {
  const [userRegData, setUserRegData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signUp, loading } = useSignup();

  const handleChange = (e) => {
    setUserRegData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (gender) => {
    setUserRegData((prev) => ({ ...prev, gender: gender }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    signUp(userRegData);
  };

  return (
    <form className="mb-6" onSubmit={HandleSubmit}>
      <div className="mb-3">
        <input
          name="fullname"
          className="px-4 py-3 w-full border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300"
          placeholder="Fullname"
          onChange={handleChange}
          value={userRegData.fullname}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="username"
          className="px-4 py-3 w-full border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300"
          placeholder="Username"
          onChange={handleChange}
          value={userRegData.username}
        />
      </div>

      <div className="mb-3">
        <input
          name="password"
          className="px-4 py-3 w-full border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300"
          placeholder="Password"
          onChange={handleChange}
          value={userRegData.password}
        />
      </div>
      <div className="mb-3">
        <input
          name="confirmPassword"
          className="px-4 py-3 w-full border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={userRegData.confirmPassword}
        />
      </div>

      <GenderCheckbox
        onCheckboxChange={handleCheckboxChange}
        selectedGender={userRegData.gender}
      />

      <Button
        type="submit"
        isloading={loading}
        className="btn h-0 w-full rounded-md bg-black text-white hover:bg-gray-800"
      >
        Sign up
      </Button>
    </form>
  );
};

export default SignupForm;
