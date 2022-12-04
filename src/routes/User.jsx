import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchAlbums } from "../components/redux/albumsFetch/actions";
import {
  selectAlbumsByUserId,
  selectAlbumLoad,
} from "../components/redux/albumsFetch/selectors";
import useFetch from "../components/redux/fetchHook";
import { fetchUsers } from "../components/redux/userFetch/actions";
import {
  selectUserByID,
  selectUsersLoad,
} from "../components/redux/userFetch/selectors";
import "./User.css";

export default function User() {
  const { id } = useParams();
  const user = useSelector((store) => selectUserByID(store, +id));
  useFetch(fetchUsers());
  useFetch(fetchAlbums());
  const userOfAlbum = useSelector((store) => selectAlbumsByUserId(store, +id));
  const albumLoading = useSelector(selectAlbumLoad);
  const userLoading = useSelector(selectUsersLoad);
  const navigate = useNavigate();
  const validation = () => {
    if (!userLoading && !user) navigate("/error");
    if (userLoading || !user || albumLoading) return <div>Loading...</div>;
  };
  validation();
  return (
    <div className="userInfo">
      <div className="name">{user.name}</div>
      <div className="username">Username: {user.username}</div>
      <div className="email">email: {user.email}</div>
      <div className="site">Site: {user.website}</div>
      <div className="albumsOfUser">
        {userOfAlbum.map((alb) => {
          return (
            <div className="albumsOfUsers" key={alb.id}>
              <div>
                <img
                  className="littleImages"
                  src="https://avatars.mds.yandex.net/i?id=af2d4f2a1cf5a08724d0028ae335d5e5-4114158-images-thumbs&n=13"
                  alt="img"
                ></img>{" "}
              </div>
              <Link key={alb.id} to={`/albums/${alb.id}`}>
                <div className="albTit">{alb.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
