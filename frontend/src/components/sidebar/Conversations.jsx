import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversation();

    return <div className="menu menu-md rounded-box w-full">
        {conversations.map((conversation) => (
            <Conversation 
                key={conversation._id}
                conversation={conversation}
                emoji={getRandomEmoji()}
            />
        ))}

        {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
}

export default Conversations;