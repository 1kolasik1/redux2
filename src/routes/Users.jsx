import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAlbums } from "../components/redux/albumsFetch/actions";
import useFetch from "../components/redux/fetchHook";
import { fetchUsers } from "../components/redux/userFetch/actions";
import { selectUsers } from "../components/redux/userFetch/selectors";

export default function Users() {
  useFetch(fetchUsers());
  useFetch(fetchAlbums());
  const users = useSelector(selectUsers);
  return (
    <div className="text-[3vh] mt-[10px] ml-[20px]">
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div className="my-[5px] underline decoration-green-500 hover:decoration-green-800">
            {user.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
