import { RxAvatar } from 'react-icons/rx';

const ChatMessages = () => {
  return (
    <div className="flex h-full w-full flex-grow items-center justify-center overflow-y-auto">
      <div className="flex h-24 w-3/4 flex-row items-center rounded-md border border-current bg-zinc-700 p-3 text-white">
        <div className="flex h-full items-center ">
          <RxAvatar className="justify-start text-3xl" />
        </div>
        <div className="flex h-full w-full items-center justify-center text-xl">
          Message
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
