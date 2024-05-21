const User = require("../models/user.model");

const util = require("util");
const db = require("../db/connectToMySql.js");

const query = util.promisify(db.query).bind(db);

const getUsersForSidebar = async (req, res) => {
    try {  
        const loggedInUserId = req.user._id;

        // const fillteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        const fillteredUsers = await query('SELECT _id, username, gender, `group`, date, profilePic FROM users WHERE _id != ?', [loggedInUserId]);

        res.status(200).json(fillteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getUsersForTable = async (req, res) => {
    try {
        const allUsers = await query('SELECT _id, username, gender, `group`, date, profilePic FROM users');

        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getUsersForTable: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteUserFromTable = async (req, res) => {
    try {
        const userId = req.params.id;

        const results = await db.query('DELETE FROM users WHERE _id = ?', [userId]);

        if (results.affectedRows === 0) {
            res.status(404).send("User not found");
        } else {
            res.status(200).send("User was deleted");
        }

    } catch {
        console.log("Error in deleteUserFromTable: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
} 

module.exports = {
    getUsersForSidebar,
    getUsersForTable,
    deleteUserFromTable
}