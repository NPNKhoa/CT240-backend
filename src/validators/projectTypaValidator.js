import Joi from 'joi';

export const projectTypeValidator = Joi.object({
  projectTypeName: Joi.string().min(3).max(50).required(),
});
