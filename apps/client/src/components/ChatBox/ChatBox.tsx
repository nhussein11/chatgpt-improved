import ChatMessages from '../ChatMessages/ChatMessages';
import ChatPrompt from '../ChatPrompt/ChatPrompt';

const ChatBox = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-grow">
        <ChatMessages />
      </div>
      <ChatPrompt />
    </div>
  );
};

export default ChatBox;
