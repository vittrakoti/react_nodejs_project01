const db = require('../db');

const getAllUsers = async (req, res) => {
    try {
      const [users] = await db.query('SELECT * FROM user');
      res.json(users);
      console.log(users);
      
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };






  module.exports = {
    getAllUsers
  };