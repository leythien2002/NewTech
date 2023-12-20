const userRouter = require('./UserRouter');
const adminRouter = require('./AdminRouter');
function route(app) {
  app.use('/auth', userRouter);
  app.use('/admin', adminRouter);
  app.use('/',userRouter);
} 
module.exports = route;