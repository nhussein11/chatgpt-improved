import styles from './sideMenu.module.css';

const SideMenu = () => {
  return (
    <>
      <aside
        className={`h-full absolute top-0 left-0 bg-gray-500 ${styles.menu}`}
      >
        <h1 className="mx-12 my-8 text-2xl font-bold">Chat GPT</h1>
      </aside>
    </>
  );
};

export default SideMenu;
