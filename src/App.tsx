import AddRecipe from "./components/AddRecipe";
import Header from "./components/Header";
import MobileHeader from "./components/mobile/MobileHeader";
import Join from "./components/Join";
import Lists from "./components/Lists";
import MobileLists from "./components/mobile/MobileLists";
import Login from "./components/Login";
import { useWindowSize } from "./hook/useWindowSize";
import useRecipe from "./store/recipe";
import useUser from "./store/user";
import { MOBILE_SIZE } from "./util/common";
import recipeJSON from "./data/recipe.json";
import { useEffect } from "react";

function App() {
  const windowSize = useWindowSize();
  const { isLogin, isJoin } = useUser();
  const { setRecipes, setSaveRecipes, onAdd } = useRecipe();

  useEffect(() => {
    setRecipes(recipeJSON);
    setSaveRecipes(recipeJSON);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {windowSize > MOBILE_SIZE ? <Header /> : <MobileHeader />}
      {windowSize > MOBILE_SIZE ? <Lists /> : <MobileLists />}
      {isLogin && <Login />}
      {onAdd && <AddRecipe />}
      {isJoin && <Join />}
    </div>
  );
}

export default App;
