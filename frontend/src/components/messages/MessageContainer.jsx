import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    },[setSelectedConversation]);

    return <div className="w-full flex flex-col border border-gray-20 ml-7 rounded-md p-5">
        {!selectedConversation ? ( 
            <NoChatSelected /> 
        ) : (
            <>
                <div className="mb-5">
                    To user: <span className="text-gray-900 rounded-md p-2 bg-gray-200">{selectedConversation.username}</span>
                </div>

                <Messages />
                <MessageInput />
            </>
        )}
    </div>
}

const NoChatSelected = () => {
    const { authUser } = useAuthContext();

    return <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
            <p>Welcome 👋 { authUser.username }</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
    </div>
}

export default MessageContainer;

