import { useMutation } from "@tanstack/react-query";
import API from "../api";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();

  const { mutate: signOut, isPending: loading } = useMutation({
    mutationFn: async () => {
      const res = await API.post(
        "/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      return res.data;
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
      } else {
        toast.error(err.message);
      }
    },
    onSuccess: () => {
      localStorage.setItem("chatapp-user", null);
      setAuthUser(null);
      navigate("/login");
    },
  });
  return { signOut, loading };
};

export default useLogout;
