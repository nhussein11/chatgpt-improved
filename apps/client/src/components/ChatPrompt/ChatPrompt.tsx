import axios from 'axios';
import { useState } from 'react';
import { BsSendPlus } from 'react-icons/bs';

const ChatPrompt = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [isPromptEmpty, setIsPromptEmpty] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (prompt === '') {
      setIsPromptEmpty(true);
      return;
    }

    setIsPromptEmpty(false);
    console.log('submit');
    const response = await axios.post(
      'http://localhost:3000/api/create-completion',
      { prompt }
    );
    const data = response.data;
    console.log("data: ",data);

    setPrompt('');
  };

  return (
    <div className="mb-5">
      <div className="flex flex-col items-center justify-center">
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
            <BsSendPlus className="ml-2 text-2xl text-white" />
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
