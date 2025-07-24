const express = require('express');
const db = require('./models/db.js');

/**
 *
 * Коннект к базе
 */

const query = db.query;

const connectionBasic = db.createPool ("basicTest");
//номинальный запрос
query(connectionBasic, 'SELECT * FROM `accounts`').then(function (row){
	// if((!row.length)) return console.log ('[MYSQL | basic | ERROR] Не удалось подключиться к БД!');

  console.log ("[MYSQL | basic] Connection success");
});

const connectionLogs = db.createPool ("logsTest");

query(connectionLogs, 'SELECT * FROM `acclog`').then(function (row){
	// if((!row.length)) return console.log ('[MYSQL | logs | ERROR] Не удалось подключиться к БД!');

  console.log ("[MYSQL | logs] Connection success");
});

/**
 *
 */

const { errors } = require('celebrate');
const cors = require('cors');
const { celebrate, Joi } = require('celebrate');

const NotFoundError = require('./errors/not-found-err');
const { createUser, login } = require('./controllers/users');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const auth = require('./middlewares/auth');

require('dotenv').config();

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    exposedHeaders: '*',
    credentials: true,
  }),
);

app.use(requestLogger);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }).unknown(true),
}), createUser);

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
  }).unknown(true),
}), login);

app.use(auth);

app.use('/users', require('./routes/users'));

///

const { optionsArray, basicTable, symbolsArray } = require('./settings/db.js');


const maxCountToList = 50;
app.post('/getLogs', (req, res, next) => {
  const { table, sql, order, desc, count, isOr } = req.body;
  console.log ("s")
  if (optionsArray [table]) {
    const options = optionsArray[table];
    //SELECT * FROM roulettes_bet WHERE id=? LIMIT 1
    let sqlText = 'SELECT ' + options.join() + ' FROM `' + table + '` WHERE ';

    let sqlTextAnd = '';

    const prefix = isOr ? "OR" : "AND";

    if (sql && sql.length) {
      sql.forEach((data) => {
        if (options.includes (data.name) && symbolsArray.includes (data.symbol)) {
          if (data.symbol == "like") {
            if (sqlTextAnd.length == 0)
              sqlTextAnd = `(lower(${data.name}) LIKE lower('${data.value}%') OR lower(${data.name}) LIKE lower('%${data.value}') OR lower(${data.name}) LIKE lower('%${data.value}%'))`;
            else
              sqlTextAnd += ` ${prefix} (lower(${data.name}) LIKE lower('${data.value}%') OR lower(${data.name}) LIKE lower('%${data.value}') OR lower(${data.name}) LIKE lower('%${data.value}%'))`;
          } else if (data.symbol == "notlike") {
            if (sqlTextAnd.length == 0)
              sqlTextAnd = `(lower(${data.name}) NOT LIKE lower('${data.value}%') OR lower(${data.name}) NOT LIKE lower('%${data.value}') OR lower(${data.name}) NOT LIKE lower('%${data.value}%'))`;
            else
              sqlTextAnd += ` ${prefix} (lower(${data.name}) NOT LIKE lower('${data.value}%') OR lower(${data.name}) NOT LIKE lower('%${data.value}') OR lower(${data.name}) NOT LIKE lower('%${data.value}%'))`;
          } else {
            if (sqlTextAnd.length == 0)
              sqlTextAnd = `lower(${data.name}) ${data.symbol} lower('${data.value}')`;
            else
              sqlTextAnd += ` ${prefix} lower(${data.name}) ${data.symbol} lower('${data.value}')`;
          }
        }
      });
    }

    if (sqlTextAnd.length == 0)
      sqlTextAnd = '1'

    let realOrder = order;

    if (!options.includes (realOrder))
      realOrder = optionsArray [table] [0];

    sqlTextAnd += ` ORDER BY ${realOrder} ${desc ? 'ASC' : 'DESC'}`

    let realCount = count;

    if (!realCount)
      realCount = maxCountToList;

    sqlTextAnd += ` LIMIT 0, ${realCount};`

    sqlText += sqlTextAnd;

    query(basicTable.includes (table) ? connectionBasic : connectionLogs, sqlText).then(function (row){
      res.send(JSON.stringify (row));
    });
  }

});


///
app.use(errorLogger);

app.use(errors());
app.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});