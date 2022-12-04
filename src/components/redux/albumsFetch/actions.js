import { getAlbums } from "../../../GetElements";

export const fetchAlbums = () => async (dispatch) => {
  dispatch({ type: "ALBUMS/FETCH/START" });
  try {
    const { albums } = await getAlbums();
    dispatch({ type: "ALBUMS/FETCH/SUCC", payload: albums });
  } catch (e) {
    console.error(e);
    dispatch({ type: "ALBUMS/FETCH/ERR", payload: e });
  }
};
