import * as projectRepo from '../repositories/project';
import { validate } from '../validations/index';
import * as projectSchema from '../validations/schemas/project';
import { BasicProject } from '../interfaces/project';
import {  ProjectModel } from '../interfaces/models/project';

export const getAll = async (): Promise<ProjectModel[]> => {
  return projectRepo.getAll();
};

export const create = async (payload: BasicProject): Promise<ProjectModel> => {
  payload = validate(payload, projectSchema.create);
  return projectRepo.create(payload);
};
