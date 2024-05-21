import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

import useAnimated from "../../zustand/useAnimated";
import { useEffect } from "react";

const Chat = () => {
    const { setIsAnimated } = useAnimated();
    
    useEffect(() => {
        setIsAnimated(false);
    }, [setIsAnimated])

    return <div className="flex h-1/2 w-full overflow-hidden">
        <Sidebar />
        <MessageContainer />
    </div>
}

export default Chat;