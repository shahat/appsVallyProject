// =================== blacklist ================
module.exports = (sequelize, DataTypes) => {
  const Blacklist = sequelize.define("Blacklist", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return Blacklist;
};
