import AddRecipe from "./components/add/AddRecipe";
import Header from "./components/header/Header";
import MobileHeader from "./components/header/mobile/MobileHeader";
import Join from "./components/join/Join";
import Lists from "./components/lists/Lists";
import MobileLists from "./components/lists/mobile/MobileLists";
import Login from "./components/login/Login";
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
