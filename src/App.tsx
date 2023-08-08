import Header from "./components/Header";
import MobileHeader from "./components/mobile/MobileHeader";
import Lists from "./components/Lists";
import MobileLists from "./components/mobile/MobileLists";
import { useWindowSize } from "./hook/useWindowSize";
import useRecipe from "./store/recipe";
import useUser from "./store/user";
import { MOBILE_SIZE } from "./util/common";
import { Suspense, useEffect } from "react";
import { getUser } from "./api/firebase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "./components/Loading";

function App() {
  const queryClient = new QueryClient();
  const windowSize = useWindowSize();
  const { currentRecipe, setCurrentRecipe } = useRecipe();
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
    getUser((state: any) => {
      setUser(state);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="w-full h-screen flex flex-col items-center"
        onClick={unView}
      >
        {windowSize > MOBILE_SIZE ? <Header /> : <MobileHeader />}
        <Suspense fallback={<Loading />}>
          {windowSize > MOBILE_SIZE ? <Lists /> : <MobileLists />}
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
