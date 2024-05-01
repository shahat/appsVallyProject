module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    requiredService: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requiredProduct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Customer;
};
