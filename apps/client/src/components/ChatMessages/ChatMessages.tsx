import { RxAvatar } from 'react-icons/rx';
import { Message, useChatsStore } from '../../Context/chatsStore';

const ChatMessages = () => {
  const { messages } = useChatsStore();

  return (
    <div className="flex h-full w-full flex-grow items-center justify-center overflow-y-auto">
      <div className="flex h-24 w-2/4 flex-col items-center rounded-md bg-zinc-700 p-3 text-white">
        {messages.map((message: Message, index: number) => (
          <div className="flex h-24 w-full items-center justify-center" key={index}>
            <div className="flex h-full items-center">
              <RxAvatar className="justify-start text-3xl" />
            </div>
            <div className="flex h-full w-3/4 items-center justify-center text-xl">
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
