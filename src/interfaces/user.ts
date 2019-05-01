export interface BasicUser {
  userId: number;
  name: string;
}

export interface User extends BasicUser {
  id: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
