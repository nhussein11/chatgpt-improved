import styles from './sideMenu.module.css';

const SideMenu = () => {
  return (
    <>
      <aside
        className={`absolute top-0 left-0 h-full bg-gray-700 ${styles.menu}`}
      >
        <h1 className="mx-12 my-8 text-2xl font-bold text-white">Chat GPT</h1>
      </aside>
    </>
  );
};

export default SideMenu;
