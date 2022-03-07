const Sequelize = require('sequelize');

module.exports = class Nft extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        collection_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        owner: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        token_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        nft_name: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        nft_description: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        image_uri: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Nft',
        tableName: 'nft',
        timestamps: true,
        paranoid: true, // 삭제일 (복구용)
        underscored: true,
        charset: 'utf8',
        onDelete: 'cascade',
      },
    );
  }
  static associate(db) {
    db.Nft.belongsTo(db.Collection, {
      foreignKey: 'collection_id',
      targetKey: 'id',
    });
  }
};
