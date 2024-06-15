import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import Button from "../../components/Button";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const { sendMessage, isPending } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 text-white bg-gray-500 py-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-3 bg-gray-700 border-gray-600"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pe-3"
          isloading={isPending}
        >
          <BsSend />
        </Button>
      </div>
    </form>
  );
};

export default MessageInput;
