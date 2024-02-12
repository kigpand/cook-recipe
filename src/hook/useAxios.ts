import axios, { AxiosInstance } from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export function useAxios() {
  const [cookies, setCookie] = useCookies(["refreshToken"]);
  const [count, setCount] = useState<number>(0);

  const axiosInstance = axios.create({
    headers: {
      Authorization: "",
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const statusCode = error.response?.status;
      const { config } = error;
      //   if (count === 3) return null;
      //   setCount(count + 1);

      const testReponse = await axiosInstance.request(config);
      return testReponse.data;
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
