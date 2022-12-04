import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAlbums } from "../components/redux/albumsFetch/actions";
import useFetch from "../components/redux/fetchHook";
import { fetchUsers } from "../components/redux/userFetch/actions";
import { selectUsers } from "../components/redux/userFetch/selectors";
import "./Users.css";

export default function Users() {
  useFetch(fetchUsers());
  useFetch(fetchAlbums());
  const users = useSelector(selectUsers);
  return (
    <div className="users">
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div className="ourUser">{user.name}</div>
        </Link>
      ))}
    </div>
  );
}
