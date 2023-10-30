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

  // `sequelize.define` also returns the model
  //   console.log(User === sequelize.models.User); // true

  User.associate = (models) => {
    User.hasMany(models.Product, {
      onDelete: "cascade",
    });
  };

  User.associate = (models) => {
    User.hasOne(models.Profile, {
      onDelete: "cascade",
    });
  };

  return User;
};
