// var db = require('../sequelize');
import db from '../sequelize.js';

export const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await db.query()
        if (!user) {
            res.status(404).json({ message: "User not found"});
        }
    
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// module.exports = getUser;