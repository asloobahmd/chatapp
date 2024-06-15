import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import API from "../api";
import axios from "axios";

const useLogin = () => {
  const navigate = useNavigate();

  const { setAuthUser } = useAuthContext();

  const { mutate: login, isPending: loading } = useMutation({
    mutationFn: async (payload) => {
      const isValidated = handleValidationErrors(payload);
      if (!isValidated) return;

      const { data } = await API.post("/api/auth/login", payload, {
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

  return { login, loading };
};

export default useLogin;

const handleValidationErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
