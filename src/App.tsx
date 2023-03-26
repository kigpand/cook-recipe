import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Lists from "./components/lists/Lists";
import Login from "./components/login/Login";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Lists />
      <Login />
    </div>
  );
}

export default App;
