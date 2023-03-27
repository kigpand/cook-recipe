import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Lists from "./components/lists/Lists";
import Login from "./components/login/Login";
import useUser from "./store/user";

function App() {
  const { isLogin } = useUser();
  return (
    <div className={styles.App}>
      <Header />
      <Lists />
      {isLogin && <Login />}
    </div>
  );
}

export default App;
