import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useTable from "../zustand/useTable";

const useGetTable = () => {
    const [loading, setLoading] = useState(false);
    const { users, setUsers } = useTable();

    useEffect(() => {
        const getConversation = async () => {
            setLoading(true);

            try {
                const res = await fetch("/api/users/table");
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                setUsers(data);

            } catch (error) { 
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        } 

        getConversation();
    }, []);

    return {loading, users};
}

export default useGetTable;