import { ChatBox, SideMenu } from "../components";

// import styles from './app.module.css';
const App = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-400">
      <SideMenu />
      <section>
        <ChatBox />
      </section>
    </div>
  );
}

export default App;
