import Joi from 'joi';

export const fileValidator = Joi.object({
  filePath: Joi.string().required(),
  fileType: Joi.string().valid('text', 'file', 'image', 'video').required(),
  uploadedTime: Joi.string().optional(),
  storageURL: Joi.uri().optional(),
});
