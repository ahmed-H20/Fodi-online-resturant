const User = require("../models/Users");

// Get all users
const getAllUsers = async(req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// Add New User
const createUser = async (req, res) => {
    const user = req.body;
    const query = { email: user.email };
    try {
      const existingUser = await User.findOne(query);
      if (existingUser) {
        return res.status(302).json({ message: "User already exists!" });
      }
      const result = await User.create(user);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // delete a user
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      // if user not found
      if(!deletedUser){
          return res.status(404).json({ message: "User not found!" });
      }
      res.status(200).json({message: "User deleted successfully!"})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
}