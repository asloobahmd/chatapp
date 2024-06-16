import { useQuery } from "@tanstack/react-query";
import API from "../api";
import { useConversation } from "../store/conversationStore";

const useGetMessages = () => {
  const { selectedConversation } = useConversation((state) => ({
    messages: state.messages,
    setMessages: state.setMessages,
    selectedConversation: state.selectedConversation,
  }));

  const { data: messages, isLoading } = useQuery({
    queryKey: ["messages", selectedConversation?._id],
    queryFn: async () => {
      const res = await API.get(`/api/message/${selectedConversation?._id}`, {
        withCredentials: true,
      });
      return res.data;
    },
    enabled: !!selectedConversation?._id,
  });

  return { messages, isLoading };
};

export default useGetMessages;
