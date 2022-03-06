const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const indexRouter = require('./routes');
const cotrollers = require('./controllers');
const port = 4000;
const { sequelize } = require('./models/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);
app.use('/', indexRouter);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// db.sequelize.sync();
// 개발 중에는 기존 테이블을 삭제하고 데이터베이스를 다시 동기화해야 할 수 있습니다. force: true다음 코드로 사용
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('connect success!');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app.listen(port, () => {
  console.log(`🚀 Sever is working on ${port}`);
});
