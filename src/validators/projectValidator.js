import Joi from 'joi';

export const projectValidator = Joi.object({
  projectName: Joi.string().min(3).max(100).required(),
  projectCreateDate: Joi.date().required(),
  projectDescription: Joi.string().max(500).optional(),
  projectStatus: Joi.string()
    .valid('inProgress', 'canceled', 'completed')
    .required(),
});
