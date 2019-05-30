import * as Joi from 'joi';
import { maxLimit, sortOrders } from '../../constants/pagination';

export const pagination: Joi.SchemaMap = {
  limit: Joi.number().max(maxLimit).required(),
  offset: Joi.number().required(),
  sortBy: Joi.string().insensitive().required(),
  sortOrder: Joi.string().insensitive().valid(sortOrders).required()
};
