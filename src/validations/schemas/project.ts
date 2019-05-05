import * as Joi from 'joi';

export const create: Joi.SchemaMap = {
  name: Joi.string().required(),
  ownerId: Joi.number().required(),
};
