import { LuLoader2 } from "react-icons/lu";

const Button = ({ isloading, disabled, children, className, ...other }) => {
  return (
    <button
      disabled={disabled || isloading}
      className={`flex items-center justify-center ${className}`}
      {...other}
    >
      {isloading ? (
        <span>
          <LuLoader2 size={20} className="animate-spin" />
        </span>
      ) : (
        ""
      )}
      {children}
    </button>
  );
};

export default Button;
