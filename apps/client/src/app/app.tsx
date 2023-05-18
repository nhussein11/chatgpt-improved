import { ChatBox, SideMenu } from '../components';

// import styles from './app.module.css';
const App = () => {
  return (
    <div className="flex h-screen flex-row bg-gray-500">
      <SideMenu />

      <section>
        <ChatBox />
      </section>
    </div>
  );
};

export default App;
