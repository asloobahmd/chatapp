import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useQueryClient } from "@tanstack/react-query";
import { useConversation } from "../store/conversationStore";

const useListenMessages = () => {
  const { socket } = useSocketContext();

  const selectedConversation = useConversation(
    (state) => state.selectedConversation
  );

  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on("receiveMessage", (newMessage) => {
      queryClient.setQueryData(
        ["messages", selectedConversation?._id],
        (oldData) => {
          return [...(oldData || []), newMessage];
        }
      );
    });

    return () => socket?.off("receiveMessage");
  }, [socket]);

  return {};
};

export default useListenMessages;
