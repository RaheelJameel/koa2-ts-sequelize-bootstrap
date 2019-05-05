import { Models } from '../models/index';
import { BasicProject } from '../interfaces/project';
import { ProjectModel } from '../interfaces/models/project';

const projectModelStatic = Models.project;

export const getAll = async (): Promise<ProjectModel[]> => {
  return projectModelStatic.findAll({
    include: [{
      model: Models.user,
      as: 'owner',
      required: false
    }]
  });
};

export const create = async (payload: BasicProject): Promise<ProjectModel> => {
  return projectModelStatic.create(payload);
};
