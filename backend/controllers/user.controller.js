const User = require("../models/user.model");

const getUsersForSidebar = async (req, res) => {
    try {  
        const loggedInUserId = req.user._id;

        const fillteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(fillteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getUsersForSidebar
}