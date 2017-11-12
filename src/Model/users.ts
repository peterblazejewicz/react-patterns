export interface User {
  name: string;
  age: number;
}

export interface Users extends Array<User> {}

export type FetchUsersHandler = (users: Users) => void;
