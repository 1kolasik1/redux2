const URL = "https://jsonplaceholder.typicode.com/";
export const getAlbums = async () => {
  const albums = await fetch(URL + "albums").then((r) => r.json());
  return { albums };
};
export const getUsers = async () => {
  const users = await fetch(URL + "users").then((r) => r.json());
  return { users };
};
