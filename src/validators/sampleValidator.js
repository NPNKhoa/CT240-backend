import Joi from 'joi';

export const sampleValidator = Joi.object({
  sampleTitle: Joi.string().min(3).max(100).required(),
  sampleDescription: Joi.string().max(500).optional(),
  collectionDate: Joi.date().required(),
  location: Joi.string().min(3).max(100).optional(),
  sampleType: Joi.string().valid('text', 'file', 'image', 'video').required(),
});
