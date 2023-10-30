module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };

  return Product;
};
