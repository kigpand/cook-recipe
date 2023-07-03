import { create } from "zustand";
import { IUser } from "../interface/IUser";

interface IUserStore {
  user: any;
  setUser: (state: any) => void;
}

const useUser = create<IUserStore>((set) => ({
  user: null,
  setUser: (state: any) => set({ user: state }),
}));

export default useUser;
