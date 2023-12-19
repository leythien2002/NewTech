const userRouter = require('./UserRouter');
const adminRouter = require('./AdminRouter');
// const guestRouter = require('./GuestRouter');
const studentRouter = require('./StudentRouter');
const thesisRouter = require('./ThesisRouter');


function route(app) {
  app.use('/auth', userRouter);
  app.use('/admin', adminRouter);
  // app.use('/guest', guestRouter);
  app.use('/student', studentRouter);
  app.use('/thesis', thesisRouter);

} 
module.exports = route;