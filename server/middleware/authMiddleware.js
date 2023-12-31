const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleWare = (req, res, next) => {
  let token = req.headers.token.split(' ')[1];
  // console.log('token after split ' + token)
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "Authentication",
        status: "ERROR",
      });
    }
    const { payload } = user;
    if (payload.role === "admin") {
      next();
    } else {
      return res.status(404).json({
        message: "Authentication",
        status: "ERROR",
      });
    }
  });
};
const authAdminMiddleWare = (req, res, next) => {
  let token = req.headers.token.split(' ')[1];
  let userId = req.params.id 
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "Authentication",
        status: "ERROR",
      });
    }
    const { payload } = user;
    if (payload?.role === "admin" || payload?.id === userId) {
      next();
    } else {
      return res.status(404).json({
        message: "User Authentication",
        status: "ERROR",
      });
    }
  });
};

const authThesisMiddleWare = (req, res, next) => {
  let token = req.headers.token.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "Authentication",
        status: "ERROR",
      });
    }
    const { payload } = user;
    if (payload?.role === "admin" || payload?.role === "professor" || payload?.role === "student"  ) {
      console.log("authentiated");
      next();
    } else {
      return res.status(404).json({
        message: "User Authentication",
        status: "ERROR",
      });
    }
  });
};


module.exports = {
  authMiddleWare,authAdminMiddleWare,authThesisMiddleWare
};
