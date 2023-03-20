import styles from "./App.module.scss";
import Lists from "./components/lists/Lists";

function App() {
  return (
    <div className={styles.App}>
      <Lists />
    </div>
  );
}

export default App;
