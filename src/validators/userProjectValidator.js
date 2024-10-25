import Joi from 'joi';

export const userProjectValidator = Joi.object({
  userId: Joi.string().required(),
  projectId: Joi.string().required(),
  userRole: Joi.string().valid('owner', 'member').required(),
});
