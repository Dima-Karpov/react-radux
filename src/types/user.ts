export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}



export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
export interface FetchUsersSuccesAction {
    type: UserActionTypes.FETCH_USERS_SUCCES;
    payload: any[];
}
export interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccesAction | FetchUsersErrorAction