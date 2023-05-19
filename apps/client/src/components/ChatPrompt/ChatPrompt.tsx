import { BsSendPlus } from 'react-icons/bs';

const ChatPrompt = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-row items-center justify-center">
        <textarea
          rows={1}
          className="h-10 w-3/4 rounded-lg border bg-transparent  p-2 text-center font-medium text-white placeholder-white placeholder-opacity-50 shadow-2xl focus:outline-none"
          placeholder="Send a message..."
        />
        <BsSendPlus className="ml-2 text-2xl text-white" />
      </div>
    </div>
  );
};

export default ChatPrompt;
