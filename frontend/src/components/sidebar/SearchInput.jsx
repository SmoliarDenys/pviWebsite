import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!search) return;

        if(search.length < 3) {
            toast.error('Search term must be at leat 3 characters long');
            setSearch("");
            return;
        }

        const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("");
        } else {
            toast.error("Not such user found!");
        }
    }

    return <form 
        onSubmit={handleSubmit}
        className="flex items-center gap-2"
    >
        <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text" 
            placeholder="Search..." 
            className="w-full input input-bordered h-10 py-4" 
        />
        <button type="submit" className="btn btn-square bg-blue-300 text-black">
            <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
    </form>
}

export default SearchInput;