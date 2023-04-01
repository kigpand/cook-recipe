import styles from "./App.module.scss";
import AddRecipe from "./components/add/AddRecipe";
import Header from "./components/header/Header";
import Join from "./components/join/Join";
import Lists from "./components/lists/Lists";
import Login from "./components/login/Login";
import useRecipe from "./store/recipe";
import useUser from "./store/user";

function App() {
  const { isLogin, isJoin } = useUser();
  const { onAdd } = useRecipe();
  return (
    <div className={styles.App}>
      <Header />
      <Lists />
      {isLogin && <Login />}
      {onAdd && <AddRecipe />}
      {isJoin && <Join />}
    </div>
  );
}

export default App;
