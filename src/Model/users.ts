/**
 * User contract
 * @export
 * @interface User
 */
export interface User {
  name: string;
  age: number;
}

/**
 * Users collection
 * @export
 * @interface Users
 * @extends {Array<User>}
 */
export interface Users extends Array<User> {}

/**
 * Type for fetch users callback function
 */
export type FetchUsersHandler = (users: Users) => void;
