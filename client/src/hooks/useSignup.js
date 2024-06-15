import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const navigate = useNavigate();

  const { setAuthUser } = useAuthContext();

  const { mutate: signUp, isPending: loading } = useMutation({
    mutationFn: async (payload) => {
      const isValidated = handleValidationErrors(payload);
      if (!isValidated) return;

      const { data } = await API.post("/api/auth/register", payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return data;
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
      } else {
        toast.error(err.message);
      }
    },
    onSuccess: (data) => {
      if (data) {
        localStorage.setItem("chatapp-user", JSON.stringify(data));
        setAuthUser(data);
        navigate("/");
      }
    },
  });

  return { signUp, loading };
};

export default useSignup;

const handleValidationErrors = ({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
