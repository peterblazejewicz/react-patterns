import { User, Users, FetchUsersHandler } from '../Model';
/**
 * Calculate the user age based on its age date
 * @param {string} dob
 * @returns {number} age of the user
 */
const ageFromDob = (dob: string) => {
  const dobDate = new Date(dob);
  const nowDate = new Date();
  const ageDiff: number = Math.abs(nowDate.getTime() - dobDate.getTime());
  return Math.ceil(ageDiff / (1000 * 3600 * 24 * 365));
};

/**
 * Fetches users from random user API endpoint
 * @param {FetchUsersHandler} callback
 */
const fetchUsers: (callback: FetchUsersHandler) => void = callback => {
  fetch('https://randomuser.me/api/?seed=qwer&results=6')
    .then(results => {
      return results.json();
    })
    .then(data => {
      // tslint:disable-next-line:no-any
      const users = data.results.map((u: any) => {
        const user: User = {
          name: `${u.name.first
            .substr(0, 1)
            .toUpperCase()}${u.name.first.substr(1)}`,
          age: ageFromDob(u.dob)
        };
        return user;
      });
      return users;
    })
    .then((users: Users) => {
      // tslint:disable-next-line:no-console
      console.log(users);
      callback(users);
    });
};

export { ageFromDob, fetchUsers };
