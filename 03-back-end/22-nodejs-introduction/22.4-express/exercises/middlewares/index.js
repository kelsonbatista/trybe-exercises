const { authMiddleware } = require('./authMiddleware');
const { errorMiddleware } = require('./errorMiddleware');
const { getSimpsonsByIdMiddleware } = require('./getSimpsonsByIdMiddleware');
const { getSimpsonsMiddleware } = require('./getSimpsonsMiddleware');
const { postSimpsonsMiddleware } = require('./postSimpsonsMiddleware');
const { validateTokenMiddleware } = require('./validateTokenMiddleware');
const { signupMiddleware } = require('./signupMiddleware');

module.exports = {
  authMiddleware,
  errorMiddleware,
  getSimpsonsByIdMiddleware,
  getSimpsonsMiddleware,
  postSimpsonsMiddleware,
  validateTokenMiddleware,
  signupMiddleware,
}
