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

/**
 * @export
 * @interface UserListProps
 */
export interface UserListProps {
  users: Users;
}

/**
 * @export
 * @interface UserListContainerProps
 */
export interface UserListContainerProps {
  users?: Users;
}

/**
 * @export
 * @interface UserListContainerState
 */
export interface UserListContainerState {
  users: Users;
}
