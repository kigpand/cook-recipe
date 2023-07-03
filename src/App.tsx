import AddRecipe from "./components/AddRecipe";
import Header from "./components/Header";
import MobileHeader from "./components/mobile/MobileHeader";
import Lists from "./components/Lists";
import MobileLists from "./components/mobile/MobileLists";
import { useWindowSize } from "./hook/useWindowSize";
import useRecipe from "./store/recipe";
import useUser from "./store/user";
import { MOBILE_SIZE } from "./util/common";
import recipeJSON from "./data/recipe.json";
import { useEffect } from "react";
import { getUser } from "./api/firebase";

function App() {
  const windowSize = useWindowSize();
  const { setRecipes, setSaveRecipes, onAdd, currentRecipe, setCurrentRecipe } =
    useRecipe();
  const { setUser } = useUser();

  function unView() {
    if (currentRecipe) {
      const listView = document.getElementById("listView");
      if (listView) {
        listView.style.animation = "closeMotion 0.2s forwards";
        listView.addEventListener("animationend", () => {
          setCurrentRecipe(null);
        });
      }
    }
  }

  useEffect(() => {
    setRecipes(recipeJSON);
    setSaveRecipes(recipeJSON);
    getUser((state: any) => {
      setUser(state);
    });
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col items-center"
      onClick={unView}
    >
      {windowSize > MOBILE_SIZE ? <Header /> : <MobileHeader />}
      {windowSize > MOBILE_SIZE ? <Lists /> : <MobileLists />}
      {onAdd && <AddRecipe />}
    </div>
  );
}

export default App;
