import ChatMessages from '../ChatMessages/ChatMessages';
import ChatPrompt from '../ChatPrompt/ChatPrompt';

const ChatBox = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="mt-5 text-2xl font-bold text-white">ChatBox</h1>
      <div className="flex-grow">
        <ChatMessages />
      </div>
      <ChatPrompt />
    </div>
  );
};

export default ChatBox;
