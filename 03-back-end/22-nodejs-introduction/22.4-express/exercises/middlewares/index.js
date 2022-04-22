const { getSimpsonsMiddleware } = require('./getSimpsonsMiddleware');
const { getSimpsonsByIdMiddleware } = require('./getSimpsonsByIdMiddleware');
const { postSimpsonsMiddleware } = require('./postSimpsonsMiddleware');

module.exports = {
  getSimpsonsMiddleware,
  getSimpsonsByIdMiddleware,
  postSimpsonsMiddleware,
}
