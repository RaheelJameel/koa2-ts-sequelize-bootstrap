import * as Joi from 'joi';

export const create: Joi.SchemaMap = {
  userId: Joi.number().required(),
  name: Joi.string().required(),
};
