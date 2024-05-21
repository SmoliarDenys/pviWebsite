import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";

import useConversation from "../zustand/useConversation";
import useAnimated from "../zustand/useAnimated";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();
    const { setIsAnimated } = useAnimated();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;

            if (window.location.pathname !== "/chat") {
                const sound = new Audio(notificationSound);
                sound.play();
                setIsAnimated(true);    
            }

            setMessages([...messages, newMessage]);
        })

        return () => socket?.off("newMessage");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket, setMessages, messages]);
}

export default useListenMessages;