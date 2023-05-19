import styles from './sideMenu.module.css';
import { HiOutlinePlus } from 'react-icons/hi';

const SideMenu = () => {
  return (
    <>
      <aside className={`h-full bg-neutral-800 ${styles.menu}`}>
        <h2 className="mx-12 my-8 text-2xl font-bold text-center text-white">Chat GPT</h2>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-center">
            <button className="text-md mx-3 flex w-full flex-row items-center justify-center rounded-lg bg-neutral-700 py-2 text-center font-medium text-white hover:bg-neutral-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <HiOutlinePlus className="mr-2 text-xl" />
              New Chat
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
