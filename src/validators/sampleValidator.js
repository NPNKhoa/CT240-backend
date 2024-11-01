import Joi from 'joi';

export const sampleValidator = Joi.object({
  sampleTitle: Joi.string().required(),
  sampleDescription: Joi.string().optional(),
  collectionDate: Joi.date().optional(),
  location: Joi.string().optional(),
  sampleType: Joi.string().required(),
  questionId: Joi.array().items(Joi.string().length(24)).optional(),
  phaseId: Joi.string().required(),
});
