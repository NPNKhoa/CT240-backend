import Joi from 'joi';

export const responseValidator = Joi.object({
  responseAnswer: Joi.string().optional(),
  questionId: Joi.string().length(24).required(),
  fileIds: Joi.array().items(Joi.string().length(24)).optional(),
});
