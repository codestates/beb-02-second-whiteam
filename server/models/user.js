const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        user_email: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        user_addr: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
        private_key: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        token_quantity: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "user",
        timestamps: true,
        paranoid: true,
        underscored: true,
        charset: "utf8",
        onDelete: "cascade",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post, {
      foreignKey: "user_id",
      sourceKey: "id",
    }),
      db.User.hasMany(db.Collection, {
        foreignKey: "creator",
        sourceKey: "user_addr",
      });
  }
};
