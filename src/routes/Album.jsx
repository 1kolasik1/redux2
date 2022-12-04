import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Album.css";
import Images from "./Images";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAlbumID,
  selectAlbumLoad,
} from "../components/redux/albumsFetch/selectors";
import useFetch from "../components/redux/fetchHook";
import { fetchAlbums } from "../components/redux/albumsFetch/actions";
import { fetchUsers } from "../components/redux/userFetch/actions";
import {
  selectUserByID,
  selectUsersLoad,
} from "../components/redux/userFetch/selectors";
import { useCallback } from "react";
export default function Album() {
  const albumLoading = useSelector(selectAlbumLoad);
  const userLoading = useSelector(selectUsersLoad);
  const navigate = useNavigate();
  const validation = () => {
    if (!albumLoading && !album) navigate("/error");
    if (!userLoading && !user) navigate("/error");
    if (albumLoading || !album) return <div>Loading...</div>;
    if (userLoading || !user) return <div>Loading...</div>;
  };
  const { id, userId } = useParams();
  useFetch(fetchAlbums());
  useFetch(fetchUsers());
  const album = useSelector((store) => selectAlbumID(store, +id));
  const user = useSelector((store) => selectUserByID(store, album?.userId));
  validation();
  return (
    <div className="albumInfo">
      {album && <div className="titleOfAlbum">{album.title}</div>}
      <div className="creator">
        {user && (
          <Link to={`/users/${user.id}`}>
            <div className="creatorOfAlbum">
              Creator <span className="ourSpan">{user.name}</span>
            </div>
          </Link>
        )}
      </div>
      <Images src={require("../albumImage.jpg")}></Images>
    </div>
  );
}
