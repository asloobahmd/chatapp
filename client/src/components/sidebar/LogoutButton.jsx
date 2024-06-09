import { BiLogOut } from "react-icons/bi";
const LogoutButton = () => {
  return (
    <div className="text-white md:text-black mt-6 md:mt-4">
      <button>
        <BiLogOut className="h-6 w-6" />
      </button>
    </div>
  );
};

export default LogoutButton;
