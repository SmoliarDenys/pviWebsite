const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const util = require("util");
const db = require("../db/connectToMySql.js");

const query = util.promisify(db.query).bind(db);

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        const userId = decoded.userId;
        const results = await query('SELECT _id, username, gender, `group`, date, profilePic FROM users WHERE _id = ?', [userId]);

        // const user = await User.findById(decoded.userId).select("-password");

        if (results.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = results[0];
        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = protectRoute;