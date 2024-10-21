import Joi from 'joi';

export const responseValidator = Joi.object({
  responseAnswer: Joi.string().required(),
  questionId: Joi.string().required(),
});
