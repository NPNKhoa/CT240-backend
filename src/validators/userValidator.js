import Joi from 'joi';

export const userValidator = Joi.object({
  fullName: Joi.string().min(3).max(100).required(),
  age: Joi.number().integer().min(18),
  email: Joi.string().required,
  dateOfBirth: Joi.date(),
  address: Joi.string().min(10).max(200),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
});
