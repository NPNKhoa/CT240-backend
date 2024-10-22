import Joi from 'joi';

export const userValidator = Joi.object({
  fullName: Joi.string().min(3).max(100),
  age: Joi.number().integer().min(18),
  email: Joi.string().required(),
  dateOfBirth: Joi.date(),
  address: Joi.string().min(10).max(200),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
});

export const userUpdateSchema = Joi.object({
  email: Joi.string().email(),
  fullName: Joi.string().max(100),
}).min(1);

export const userIdSchema = Joi.string().hex().length(24);
