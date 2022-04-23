const { errorMiddleware } = require('./errorMiddleware');
const { getSimpsonsByIdMiddleware } = require('./getSimpsonsByIdMiddleware');
const { getSimpsonsMiddleware } = require('./getSimpsonsMiddleware');
const { postSimpsonsMiddleware } = require('./postSimpsonsMiddleware');
const { validateTokenMiddleware } = require('./validateTokenMiddleware');
const { signupMiddleware } = require('./signupMiddleware');

module.exports = {
  errorMiddleware,
  getSimpsonsByIdMiddleware,
  getSimpsonsMiddleware,
  postSimpsonsMiddleware,
  validateTokenMiddleware,
  signupMiddleware,
}
