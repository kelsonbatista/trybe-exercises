module.exports = (sequelize, DataTypes) => {
  const bookModel = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.STRING,
  },
  // {
  //   timestamp: false,
  // }
  );

  return bookModel;
}
