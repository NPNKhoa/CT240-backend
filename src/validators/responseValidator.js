import Joi from 'joi';

export const responseValidator = Joi.object({
  responseAnswer: Joi.string().optional(),
  questionId: Joi.string().required(),
  userId: Joi.string().required(),
  files: Joi.array().items(Joi.string()).optional(),
});
