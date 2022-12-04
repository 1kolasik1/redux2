export const selectUsers = (store) => store.users.users;
export const selectUserByID = (store, id) =>
  store.users.users.find((user) => user.id === id);
export const selectUsersLoad = (store) => store.users.loading;
export const selectUsersError = (store) => store.users.error;
