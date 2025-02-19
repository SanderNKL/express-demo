import db from '../sequelize.js';

export const getUsers = async (req, res, next) => {
    const users = await db.query('SELECT * FROM users');
    res.status(200).json(users);
}

// module.exports = getUsers;