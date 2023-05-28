import ChatMessages from '../ChatMessages/ChatMessages';
import ChatPrompt from '../ChatPrompt/ChatPrompt';

const ChatBox = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <ChatMessages />
      <ChatPrompt />
    </div>
  );
};

export default ChatBox;
