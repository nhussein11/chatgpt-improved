import { useState } from 'react';
import { BsSendPlus } from 'react-icons/bs';
import axios from 'axios';
type ChatLog = {
  user: string;
  message: string;
};

const ChatPrompt = () => {
  const [message, setMessage] = useState<string>('');
  const [log, setLog] = useState<ChatLog[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    const response = await axios.post(
      'http://localhost:3000/api/create-completion'
    );
    const data = response.data;
    console.log(data);

    // const response = await axios.get('http://localhost:3000/api/');
    // const data = response.data;
    // console.log(data);

    setLog([...log, { user: 'me', message }]);
    setMessage('');
  };

  return (
    <div className="mb-5">
      <div className="flex flex-row items-center justify-center">
        <form
          className="flex flex-row items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="h-10 w-3/4 rounded-lg border bg-transparent  p-2 text-center font-medium text-white placeholder-white placeholder-opacity-50 shadow-2xl focus:outline-none"
            placeholder="Send a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>
            <BsSendPlus className="ml-2 text-2xl text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPrompt;
