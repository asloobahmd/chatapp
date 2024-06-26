import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import API from "../api/index";
import toast from "react-hot-toast";
import { useConversation } from "../store/conversationStore";

const useSendMessage = () => {
  const { selectedConversation } = useConversation((state) => ({
    messages: state.messages,
    setMessages: state.setMessages,
    selectedConversation: state.selectedConversation,
  }));

  const queryClient = useQueryClient();

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async (message) => {
      const res = await API.post(
        `/api/message/send/${selectedConversation?._id}`,
        { message },
        {
          withCredentials: true,
        }
      );
      return res.data;
    },
    onError: (err) => {
      console.log(err);
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
      } else {
        toast.error(err.message);
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["messages", selectedConversation?._id],
        (oldData) => {
          return [...(oldData || []), data];
        }
      );
    },
  });

  return { sendMessage, isPending };
};

export default useSendMessage;
