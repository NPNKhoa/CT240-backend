import Joi from 'joi';

export const projectValidator = Joi.object({
  projectName: Joi.string().min(3).max(100).required(),
  projectType: Joi.string().required(),
  projectDescription: Joi.string().max(500).optional(),
  projectCreateDate: Joi.date().optional(),
  projectStatus: Joi.string()
    .valid('active', 'completed', 'canceled')
    .default('canceled'),
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref('startDate')).required(),
});

export const projectUpdateSchema = Joi.object({
  projectName: Joi.string().min(3).max(100).optional(),
  projectType: Joi.string().optional(),
  projectType: Joi.string().optional(),
  projectDescription: Joi.string().max(500).optional(),
  projectStatus: Joi.string()
    .valid('active', 'completed', 'canceled')
    .optional(),
  startDate: Joi.date().optional(),
  endDate: Joi.date().greater(Joi.ref('startDate')).optional(),
}).min(1);

export const projectIdSchema = Joi.string().hex().length(24);
