const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const UserService = require("../service/UserService");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(200).json({
        status: "ERROR",
        message: "The input is required",
      });
    }
    const response = await UserService.loginUser(req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
const register = async (req, res, next) => {
  try {
    const { username, password,role,name } = req.body;
    console.log("Request Body",req.body);
    if (!username || !password) {
      return res.status(200).json({
        status: "ERROR",
        message: "The input is required",
      });
    }
    const response = await UserService.createUser(req.body);
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
    const response = await UserService.getDetailUser(userId);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
const refreshToken = async (req, res, next) => {
  try {
    const token = req.headers.token.split(' ')[1];
    if (!token) {
      return res.status(200).json({
        status: "ERROR",
        message: "The token is required",
      });
    }
    const response = await jwtService.refreshTokenJwt(token);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
module.exports = { login, register,refreshToken,getDetailUser };
