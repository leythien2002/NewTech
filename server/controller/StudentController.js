const User = require("../models/UserModel");
const UserService = require("../service/UserService");



  const update = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const data = req.body;
      if (!userId) {
        return res.status(200).json({
          status: "ERROR",
          message: "The UserID is required",
        });
      }
      console.log("userId: ", userId);
      const response = await UserService.update(userId, data);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };

  const getDetailUser = async (req, res, next) => {
    try {
      const userId = req.params.id;
      if (!userId) {
        return res.status(200).json({
          status: "ERROR",
          message: "The UserID is required",
        });
      }
      console.log("userId: ", userId);
      const response = await UserService.getDetailUser(userId);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };

module.exports = {update, getDetailUser,  };