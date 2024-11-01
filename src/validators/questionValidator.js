import Joi from 'joi';

export const questionValidator = Joi.object({
  question: Joi.string().min(3).max(500).required(),
  questionType: Joi.string().valid('text', 'file', 'image', 'video').required(),
  sampleId: Joi.string().hex().length(24).required(),
});
