import { create } from "zustand";
import { IUser } from "../interface/IUser";

interface IUserStore {
  isLogin: boolean;
  isJoin: boolean;
  user: IUser | null;
  loginUser: (data: IUser) => void;
  logOutUser: () => void;
  onLogin: () => void;
  unLogin: () => void;
  setJoin: (flag: boolean) => void;
}

const useUser = create<IUserStore>((set) => ({
  isLogin: false,
  user: null,
  isJoin: false,
  loginUser: (data: IUser) => set({ user: data }),
  logOutUser: () => set({ user: null }),
  onLogin: () => set({ isLogin: true }),
  unLogin: () => set({ isLogin: false }),
  setJoin: (flag: boolean) => set({ isJoin: flag }),
}));

export default useUser;
