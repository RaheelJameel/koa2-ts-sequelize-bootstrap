import { Models } from '../models/index';
import { BasicProject } from '../interfaces/project';
import { ProjectModel } from '../interfaces/models/project';
import { PaginationState } from '../interfaces/pagination';
import { createPaginateOptions } from '../util/pagination';

const projectModelStatic = Models.project;

export const getAll = async (pagination?: PaginationState): Promise<ProjectModel[]> => {
  const paginate = createPaginateOptions(pagination);
  return projectModelStatic.findAll({
    include: [{
      model: Models.user,
      as: 'owner',
      required: false
    }],
    ...paginate
  });
};

export const create = async (payload: BasicProject): Promise<ProjectModel> => {
  return projectModelStatic.create(payload);
};
