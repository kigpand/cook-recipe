import axios, { AxiosInstance } from "axios";
import { useCookies } from "react-cookie";

export function useAxios() {
  const [cookies, setCookie] = useCookies(["refreshToken"]);

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
      Authorization: "",
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const statusCode = error.response?.status;
      if (statusCode === 401) {
        error.response.statusText = "Unauthorized";
        error.response.status = 401;
        // token 불러오는 코드 호출 cookies 사용
        console.log(cookies.refreshToken);
      }
      return Promise.reject(error);
    }
  );

  function handleLogInToken(refreshToken: string, accessToken: string) {
    setCookie("refreshToken", refreshToken);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  function handleLogoutToken() {
    setCookie("refreshToken", null);
    axiosInstance.defaults.headers.common.Authorization = "";
  }

  return { axiosInstance, handleLogInToken, handleLogoutToken };
}
