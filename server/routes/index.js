const userRouter = require('./UserRouter');
const adminRouter = require('./AdminRouter');
function route(app) {
  app.use('/auth', userRouter);
  app.use('/admin', adminRouter);
} 
module.exports = route;