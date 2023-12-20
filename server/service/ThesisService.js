const ThesisModel = require("../models/ThesisModel");
const bcrypt = require("bcrypt");
const jwtService = require("./JwtService");
const FileThesis = require('../models/FileThesis');

const add = (newThesis) => {
  return new Promise(async (resolve, reject) => {
    console.log(newThesis);
    const { title, description, professor, creator_student } = newThesis;
    try {
      const existedThesis = await ThesisModel.findOne({
        title: title,
      });
      if (existedThesis) {
        resolve({
          status: 200,
          message: "Thesis is already registered",
        });
      }
      const createdThesis = await ThesisModel.create({
        title,
        description,
        created_time: new Date(),
        pending: true,
        professor,
        creator_student,
      });
      if (createdThesis) {
        resolve({
          status: "OK",
          message: "CREATE SUCESS",
          data: createdThesis,
        });
      } else {
        console.log(`error`);
      }
    } catch (e) {
      reject(e);
    }
  });
};
const update = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const existed = await ThesisModel.findOne({
        _id: id,
      });
      if (existed === null) {
        resolve({
          status: 200,
          message: "Title is not existed",
        });
      }
      const updatedThesis = await ThesisModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      console.log("UpdatedThesis", updatedThesis);

      resolve({
        status: "OK",
        message: "UPDATE_SUCESS",
        data: updatedThesis,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allThesis = await ThesisModel.find();
      resolve({
        status: "OK",
        message: "SUCESS",
        data: allThesis,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const getDetailUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const existed = await ThesisModel.findOne({
        _id: id,
      });
      // console.log('existed User', existedUser);
      if (existed === null) {
        resolve({
          status: 200,
          message: "Thesis is not existed",
        });
      }
      resolve({
        status: "OK",
        message: "SUCESS",
        data: existed
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteThesis = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const existed = await ThesisModel.findOne({
        _id: id,
      });
      // console.log('existed User', existedUser);
      if (existed === null) {
        resolve({
          status: 200,
          message: "Title is not existed",
        });
      }
      const deleteThesis = await ThesisModel.findByIdAndDelete(id, data, {
        new: true,
      });
      console.log("deleted", deleteThesis);

      resolve({
        status: "OK",
        message: "DELETE_SUCESS",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const uploadFile = ({ file_pdf, file_name,  thesis }) => {
  return new Promise(async (resolve, reject) => {
    try {
     
      const createdFileThesis = await FileThesis.create({
        file_data: file_pdf.buffer,
        file_name,
        created_time: new Date(),
        thesis,
      });
      if (createdFileThesis) {
        resolve({
          status: "OK",
          message: "CREATE SUCESS",
          data: createdFileThesis,
        });
      } else {
        console.log(`error`);
      }
    } catch (e) {
      reject(e);
    }
  });
};
const getFileById = async (fileId) => {
  try {
    const file = await FileThesis.findById(fileId);
    if (!file) {
      throw new Error('File not found');
    }
    // console.log(file)
    return file;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};
const getFileByThesisId =async (thesisId)=> {
  try {
    const files = await FileThesis.find({thesis: thesisId});

    // console.log(file)
    return files;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};
module.exports = {
  add,
  update,
  getAll,
  getDetailUser,
  deleteThesis,
  uploadFile,
  getFileById,
  getFileByThesisId

};
