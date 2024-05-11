const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const contact = sequelize.define("contact", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    mailAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    senderPhone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mailerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mailerSubject: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    mailerMessage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return contact;
};
