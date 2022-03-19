const { User, UserSchema } = require('./user.model')
//TODO: import other models here

// configuration of the models
function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  //TODO: add other models here
}

module.exports = setupModels
