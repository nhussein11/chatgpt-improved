import { create } from 'zustand';

export type Message = {
  user: string;
  text: string;
};

type MessagesStore = {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
};

const initialMessage: Message = {
  user: "gpt",
  text:"Hello, I'm GPT-3! I can help you with your tasks! 🤖"
};

export const useChatsStore = create<MessagesStore>((set) => ({
  messages: [initialMessage],
  addMessage: (message: Message) => (
    console.log(message),
    set((state) => ({ messages: [...state.messages, message] }))),
  clearMessages: () => set({ messages: [initialMessage] }),
}));
