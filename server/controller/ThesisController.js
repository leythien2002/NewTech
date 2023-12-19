
const Thesis = require("../models/ThesisModel");
const bcrypt = require("bcrypt");
const ThesisService = require("../service/ThesisService");

const add = async (req, res) => {
    try {
      const data = req.body;
      if (!data) {
        return res.status(200).json({
          status: "ERROR",
          message: "The Data is required",
        });
      }
      const response = await ThesisService.add(data);
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
          message: "The Input is required",
        });
      }
      console.log("Thesis Title ", userId);
      const response = await ThesisService.update(userId, data);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
  const getAll = async (req, res, next) => {
    try {
      const response = await ThesisService.getAll();
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
          message: "The ThesisId is required",
        });
      }
      console.log("ThesisId: ", userId);
      const response = await ThesisService.getDetailUser(userId);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };

  const deleteThesis = async (req, res, next) => {
    try {
      const thesisId = req.params.id;
      const token = req.headers
      console.log(token);
      if (!thesisId) {
        return res.status(200).json({
          status: "ERROR",
          message: "The ThesisId is required",
        });
      }
      const response = await ThesisService.deleteThesis(thesisId);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
  module.exports = {add,update,getAll,getDetailUser,deleteThesis};