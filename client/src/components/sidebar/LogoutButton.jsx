import { BiLogOut } from "react-icons/bi";
import Button from "../Button.jsx";
import useLogout from "../../hooks/useLogout.js";

const LogoutButton = () => {
  const { signOut } = useLogout();

  const handleSignout = () => {
    signOut();
  };

  return (
    <div className="text-white md:text-black mt-6 md:mt-4">
      <Button onClick={() => handleSignout()}>
        <BiLogOut className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default LogoutButton;
