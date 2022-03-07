const Sequelize = require('sequelize');

module.exports = class Collection extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        collection_name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        collection_symbol: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        contract_addr: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        creator: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Collection',
        tableName: 'collection',
        timestamps: true,
        paranoid: true, // 삭제일 (복구용)
        underscored: true,
        charset: 'utf8',
        onDelete: 'cascade',
      },
    );
  }
  static associate(db) {
    db.Collection.belongsTo(db.User, {
      foreignKey: 'creator',
      targetKey: 'user_addr',
    });
  }
  static associate(db) {
    db.Collection.hasMany(db.Nft, {
      foreignKey: 'collection_id',
      sourceKey: 'id',
    });
  }
};
