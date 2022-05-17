const userModel = (Sequelize, DataTypes) => {
  // model sempre  no singular User pois é instancia de Users
  const userModel = Sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING
  }, 
  //{
    // esse comando é usado para adicionar ou nao a coluna createdAt e updatedAt (por padrao é adicionado)
    //timestamp: false,
  //}
  );
  
  return userModel;

};

module.exports = userModel;
