const { NODE_ENV, JWT_SECRET } = process.env;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const NotFoundError = require('../errors/not-found-err');
const ConflictError = require('../errors/conflict-err');


const db = require('../models/db.js');
const connectionLogs = db.createPool ("admin");
const query = db.query;

query(connectionLogs, 'SELECT * FROM `characters`').then(function (row){
	if((!row.length)) return console.log ('[MYSQL | admin | ERROR] Не удалось подключиться к БД!');

  console.log ("[MYSQL | admin] Connection success")
	row.forEach(function(itm) {

	});

});




module.exports.getUser = (req, res, next) => {
  const userId = req.user._id;
  query(connectionLogs, 'SELECT * FROM `characters` WHERE `id`=?', [userId])
    .then((users) => {
      if (!users || !users.length) return next(new NotFoundError('Пользователь с таким ID не найден в базе'));
      return res.send(users[0]);
    })
};

module.exports.updateUser = (req, res, next) => {
  const { name, email } = req.body;
  const userId = req.users[0].id ;

  query(connectionLogs, 'UPDATE `characters` SET `name`=?, `email`=? WHERE `id`=?', [name, email, userId])
};

module.exports.createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;
  query(connectionLogs, 'SELECT * FROM `characters` WHERE `name`=? OR `email`=? LIMIT 1', [name, email])
    .then((users) => {
      if(users && users.length){
        return next(new ConflictError('Пользователь с такой почтой уже зарегистрирован'));
      }
      else{
        bcrypt.hash(password, 10)
        .then((hash) => {
          query(connectionLogs, 'INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)', [name, email, hash])
          .then((result) => {
            res.status(200).send({ message: 'Пользователь успешно создан - ' + (result.insertId) })
          })
        })
      }
    })
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  console.log(password)
  query(connectionLogs, 'SELECT * FROM `characters` WHERE (`name`=? OR `email`=?)', [email, email])
  .then((users) => {
    if(!users || !users.length){
      return next(new ConflictError('Данные введены не верно.'));
    }
    else{
        const user = users[0]
        if(user && bcrypt.compare(password, user.password)){
          const token = jwt.sign(
          { _id: users[0].id },
          NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-string',
          { expiresIn: '7d' },
          );
          return res.send({ token });
        } else{
          return next(new ConflictError('Данные введены не верно.'));
        }

    }
  })
};