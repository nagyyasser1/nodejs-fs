module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      password: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Product, {
      onDelete: "cascade",
    });

    User.hasOne(models.Profile, {
      onDelete: "cascade",
    });
  };

  return User;
};
