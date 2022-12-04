import { getUsers } from "../../../GetElements";
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: "USERS/FETCH/START" });
  try {
    const { users } = await getUsers();
    dispatch({ type: "USERS/FETCH/SUCC", payload: users });
  } catch (e) {
    console.error(e);
    dispatch({ type: "USERS/FETCH/ERR", payload: e });
  }
};
