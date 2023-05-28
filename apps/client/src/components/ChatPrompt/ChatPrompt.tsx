import { useState } from 'react';
import { BsSendPlus, BsTrash } from 'react-icons/bs';
import { useChatsStore } from '../../Context/chatsStore';
import createCompletion from '../../services/createCompletion';

const ChatPrompt = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [isPromptEmpty, setIsPromptEmpty] = useState<boolean>(false);
  const { addMessage,clearMessages } = useChatsStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (prompt.trim() === '') {
      setIsPromptEmpty(true);
      return;
    }

    setIsPromptEmpty(false);
    addMessage({user: "user", text: prompt});
    setPrompt('');

    const { data : completion } = await createCompletion(prompt);
    addMessage({user: "gpt", text: completion});

  };

  const handleCleanMessages = () => {
    setPrompt('');
    clearMessages();
  }    

  return (
    <div className="mb-5">
      <div className="flex flex-row items-center justify-center">
            <button onClick={handleCleanMessages}>
          <BsTrash className="mx-4 text-2xl text-white" />
        </button>
        <form
          className="flex flex-row items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="h-10 w-full rounded-lg border bg-transparent p-2 text-center font-medium text-white placeholder-white placeholder-opacity-50 shadow-2xl focus:outline-none"
            placeholder="Send a message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button>
            <BsSendPlus className="ml-3 text-2xl text-white" />
          </button>
        </form>
        {isPromptEmpty && (
          <span className="text-red-500 mt-3 text-sm">
            Please enter a prompt.
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatPrompt;
