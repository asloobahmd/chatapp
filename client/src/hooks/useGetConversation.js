import { useQuery } from "@tanstack/react-query";
import API from "../api";
import { useAuthContext } from "../context/AuthContext";

const useGetConversation = () => {
  const { authUser } = useAuthContext();

  const { data: conversations, isLoading } = useQuery({
    queryKey: ["conversations", authUser._id],
    queryFn: async () => {
      const res = await API.get("/api/user", {
        withCredentials: true,
      });
      return res.data;
    },
  });
  return { conversations, isLoading };
};

export default useGetConversation;
