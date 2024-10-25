import Joi from 'joi';

export const fileValidator = Joi.object({
  fileType: Joi.string().optional(),
});
