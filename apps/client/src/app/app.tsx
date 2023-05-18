import { SideMenu } from "../components";

// import styles from './app.module.css';
const App = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-700">
      <SideMenu />
      <main className="">main</main>
    </div>
  );
}

export default App;
