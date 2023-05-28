import { RxAvatar } from 'react-icons/rx';
import {AiOutlineRobot} from 'react-icons/ai'
import { Message, useChatsStore } from '../../Context/chatsStore';
import { useEffect, useRef } from 'react';

const ChatMessages = () => {
  const { messages } = useChatsStore();
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  };

  return (
    <div
      className="border-red flex h-full w-full snap-y flex-col items-center justify-center overflow-auto"
      ref={messagesRef}
    >
      <div className="flex w-full snap-end flex-col items-center rounded-md p-2 text-white">
        {messages.map((message: Message, index: number) => (
          <div
            className={`${message.user === 'gpt' ? 'bg-zinc-500' : ''} 
            flex w-full items-center justify-center py-6 `}
            key={index}
          >
            <div className="flex items-center px-3">
              {message.user === 'gpt' ? (
                <AiOutlineRobot className="justify-end text-3xl" />
              ) : (
                <RxAvatar className="justify-start text-3xl" />
              )}
            </div>
            <div
              className="flex
              w-3/4 items-center justify-center px-3 text-xl"
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
