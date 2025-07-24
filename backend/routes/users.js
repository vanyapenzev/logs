const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUser, updateUser,
} = require('../controllers/users');

router.get('/me', celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
}), getUser);

router.patch('/me', celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().min(5).max(30).required(),
  }).unknown(true),
}), updateUser);

module.exports = router;
