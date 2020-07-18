
export interface IUser {
    firstName: string,
    lastName: string
}

type UsersState = IUser[];

export interface StoreState {
    users: UsersState
}
