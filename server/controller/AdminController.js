const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const UserService = require("../service/UserService");


const add = async (req, res, next) => {
    try {
      const data = req.body;
      if (!data) {
        return res.status(200).json({
          status: "ERROR",
          message: "The Data is required",
        });
      }
      const response = await UserService.createUser(data);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
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
  const deleteUser = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const token = req.headers
      console.log(token);
      if (!userId) {
        return res.status(200).json({
          status: "ERROR",
          message: "The UserID is required",
        });
      }
      console.log("userId: ", userId);
      const response = await UserService.deleteUser(userId);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
  const getAll = async (req, res, next) => {
    try {
      const response = await UserService.getAll();
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

module.exports = {update,deleteUser, getAll, getDetailUser, add };