import styles from "./App.module.scss";
import AddRecipe from "./components/add/AddRecipe";
import Header from "./components/header/Header";
import Lists from "./components/lists/Lists";
import Login from "./components/login/Login";
import useRecipe from "./store/recipe";
import useUser from "./store/user";

function App() {
  const { isLogin } = useUser();
  const { onAdd } = useRecipe();
  return (
    <div className={styles.App}>
      <Header />
      <Lists />
      {isLogin && <Login />}
      {onAdd && <AddRecipe />}
    </div>
  );
}

export default App;
