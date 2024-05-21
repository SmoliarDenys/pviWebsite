import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const {loading, sendMessage} = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message) return;

        await sendMessage(message);
        setMessage("");
    }

    return <form 
        className="mt-3"
        onSubmit={handleSubmit}
    >    
        <div className="w-full relative">
            <input 
                type="text" 
                placeholder="send a message"
                className="w-full input input-bordered h-10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button 
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
                {loading ? <span className='loading loading-spinner'></span> : <BsSend />}
            </button>
        </div>
    </form>
}

export default MessageInput;