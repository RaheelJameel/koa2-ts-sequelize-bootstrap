import * as projectRepo from '../repositories/project';
import { validate } from '../validations/index';
import * as projectSchema from '../validations/schemas/project';
import { BasicProject } from '../interfaces/project';
import {  ProjectModel } from '../interfaces/models/project';
import { PaginationState } from '../interfaces/pagination';

export const getAll = async (pagination?: PaginationState): Promise<ProjectModel[]> => {
  return projectRepo.getAll(pagination);
};

export const create = async (payload: BasicProject): Promise<ProjectModel> => {
  payload = validate(payload, projectSchema.create);
  return projectRepo.create(payload);
};
