export type IUser = {
  firstName: string,
  lastName: string
}

export type UsersState = IUser[];

export type Action<T = unknown> = { type: T };
