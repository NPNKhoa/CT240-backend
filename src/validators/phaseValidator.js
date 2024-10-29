import Joi from 'joi';

export const phaseValidator = Joi.object({
  phaseName: Joi.string().min(3).max(100).required(),
  phaseDescription: Joi.string().max(500).optional(),
  startDate: Joi.date().required(),
  endDate: Joi.date().min(Joi.ref('startDate')).required(),
  projectId: Joi.string().hex().length(24).required(),
});
