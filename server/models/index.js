//'use strict';
const Sequelize = require('sequelize');

const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Collection = require('./collection');
const Nft = require('./nft');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;

db.User = User;
db.Post = Post;
db.Comment = Comment;
db.Collection = Collection;
db.Nft = Nft;

// User.init(sequelize);
// Post.init(sequelize);
// Comment.init(sequelize);
// Collection.init(sequelize);
// Nft.init(sequelize);

// User.associate(db);
// Post.associate(db);
// Comment.associate(db);
// Collection.associate(db);
// Nft.associate(db);

//User.sync({
//  force: process.env.TABLE_CREATE_ALWAYS === "true", // true : (drop) table 데이터 없어질 수 있음
//  alter: process.env.TABLE_ALTER_SYNC === "true", // 개발 끝나면 false로 하기
//});
//Post.sync({
//  force: process.env.TABLE_CREATE_ALWAYS === "true", // true : (drop) table 데이터 없어질 수 있음
//  alter: process.env.TABLE_ALTER_SYNC === "true", // 개발 끝나면 false로 하기
//});
//Comment.sync({
//  force: process.env.TABLE_CREATE_ALWAYS === "true", // true : (drop) table 데이터 없어질 수 있음
//  alter: process.env.TABLE_ALTER_SYNC === "true", // 개발 끝나면 false로 하기
//});

module.exports = db;
