const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        like: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: "Post",
        tableName: "post",
        timestamps: true,
        paranoid: true, // 삭제일 (복구용)
        underscored: true,
        charset: "utf8",
        onDelete: "cascade",
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "id",
    });
  }
  static associate(db) {
    db.Post.hasMany(db.Comment, {
      foreignKey: "post_id",
      sourceKey: "id",
    });
  }
};
