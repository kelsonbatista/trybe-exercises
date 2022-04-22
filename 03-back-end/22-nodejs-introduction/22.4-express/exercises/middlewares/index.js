const { getSimpsonsMiddleware } = require('./getSimpsonsMiddleware');
const { getSimpsonsByIdMiddleware } = require('./getSimpsonsByIdMiddleware');
const { postSimpsonsMiddleware } = require('./postSimpsonsMiddleware');
const { validateTokenMiddleware } = require('./validateTokenMiddleware');

module.exports = {
  getSimpsonsMiddleware,
  getSimpsonsByIdMiddleware,
  postSimpsonsMiddleware,
  validateTokenMiddleware,
}
