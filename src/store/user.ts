import { create } from "zustand";
import { IUser } from "../interface/IUser";

interface IUserStore {
  isLogin: boolean;
  user: IUser | null;
  loginUser: (data: IUser) => void;
  logOutUser: () => void;
  onLogin: () => void;
  unLogin: () => void;
}

const useUser = create<IUserStore>((set) => ({
  user: null,
  isLogin: false,
  loginUser: (data: IUser) => set({ user: data }),
  logOutUser: () => set({ user: null }),
  onLogin: () => set({ isLogin: true }),
  unLogin: () => set({ isLogin: false }),
}));

export default useUser;
