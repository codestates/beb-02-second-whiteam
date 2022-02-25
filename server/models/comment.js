const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        post_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        writer: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Comment",
        tableName: "comment",
        timestamps: true,
        paranoid: true, // 삭제일 (복구용)
        underscored: true,
        charset: "utf8",
        onDelete: "cascade",
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.Post, {
      foreignKey: "post_id",
      targetKdy: "id",
    });
  }
};
