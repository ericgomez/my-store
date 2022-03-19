const { Model, DataTypes, Sequelize } = require('sequelize')

// Name of the table
const USER_TABLE = 'users'

// Define Schema of the table
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at', // This is the name of the field in the database
    defaultValue: Sequelize.NOW
  }
}

// Define Class of the model of the table
class User extends Model {
  static associate () {
    // relationships
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User', // This is the name of the model in the database
      timestamps: false // This is to disable the default timestamps
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
