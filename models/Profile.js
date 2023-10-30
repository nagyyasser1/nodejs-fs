module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      country: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    }
  );

  // `sequelize.define` also returns the model
  //   console.log(profile === sequelize.models.profile); // true

  Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };

  return Profile;
};
