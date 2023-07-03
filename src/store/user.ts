import { create } from "zustand";
import { IUser } from "../interface/IUser";

interface IUserStore {
  user: any;
  loginUser: (data: any) => void;
  logOutUser: () => void;
}

const useUser = create<IUserStore>((set) => ({
  user: null,
  loginUser: (data: any) => set({ user: data }),
  logOutUser: () => set({ user: null }),
}));

export default useUser;
