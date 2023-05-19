import { ChatBox, SideMenu } from '../components';

// import styles from './app.module.css';
const App = () => {
  return (
    <div className="flex h-screen w-screen flex-row bg-neutral-700">
      <SideMenu />
      <section className="h-full w-full flex-1 flex-col justify-center">
        <ChatBox />
      </section>
    </div>
  );
};

export default App;
