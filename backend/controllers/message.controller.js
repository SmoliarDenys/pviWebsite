const Conversation = require("../models/conversation.model.js");
const Message = require("../models/message.model.js");
const { getReceiverSocketId, io } = require("../socket/socket.js");

const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId ]}
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        
        await Promise.all([conversation.save(), newMessage.save()]);

        const reciverSocketId = getReceiverSocketId(receiverId);

        if (reciverSocketId) {
            io.to(reciverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);

    } catch(error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = {
    getMessages,
    sendMessage
}