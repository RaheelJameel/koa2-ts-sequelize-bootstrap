import { User } from './user';

export interface BasicProject {
  name: string;
  ownerId: number;
}

export interface Project extends BasicProject {
  id: number;
  owner?: User;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
