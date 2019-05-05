export interface BasicProject {
  name: string;
  ownerId: number;
}

export interface Project extends BasicProject {
  id: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
