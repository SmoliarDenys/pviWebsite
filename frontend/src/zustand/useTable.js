import { create } from "zustand";

const useTable = create((set) => ({
    users: [],
    setUsers: (users) => set({users}),
}))

export default useTable;