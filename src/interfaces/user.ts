import { Project } from './project';

export interface BasicUser {
  userId: number;
  name: string;
}

export interface User extends BasicUser {
  id: number;
  projects?: Project[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
