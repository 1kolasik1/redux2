export const selectAlbums = (store) => store.albums.albums;
export const selectAlbumID = (store, id) =>
  store.albums.albums.find((album) => album.id === id);
export const selectAlbumsByUserId = (store, id) =>
  store.albums.albums.filter((album) => album.userId === id);
export const selectAlbumLoad = (store) => store.albums.loading;
export const selectAlbumError = (store) => store.albums.error;
