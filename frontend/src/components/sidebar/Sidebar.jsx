import SearchInput from "./SearchInput";
import Conversations from "./Conversations";

const Sidebar = () => {
    return <div className="flex flex-col border border-gray-20 rounded-md p-5">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
    </div>
}

export default Sidebar;