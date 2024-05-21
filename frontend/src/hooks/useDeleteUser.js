import { useState } from "react";
import toast from "react-hot-toast";
import useTable from "../zustand/useTable";

const useDeleteUser = () => {
    const [ loading, setLoading ] = useState(false);
    const { users, setUsers } = useTable();

    const deleteUser = async (userId) => {
        setLoading(true);

        try {
            await fetch(`/api/users/table/${userId}`, {
                method: 'DELETE'
            });

            toast.success("User is deleted");
            
            setUsers(users.filter(user => user._id !== userId));

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    } 

    return { deleteUser, loading };
}

export default useDeleteUser;