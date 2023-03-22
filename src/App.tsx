import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Lists from "./components/lists/Lists";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Lists />
    </div>
  );
}

export default App;
