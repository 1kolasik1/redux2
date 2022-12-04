import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Images from "./Images";
import { useSelector } from "react-redux";
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
  const { id } = useParams();
  useFetch(fetchAlbums());
  useFetch(fetchUsers());
  const album = useSelector((store) => selectAlbumID(store, +id));
  const user = useSelector((store) => selectUserByID(store, album?.userId));
  validation();
  return (
    <div className="mx-[20px] my-[10px]">
      {album && <div className="text-3xl font-bold">{album.title}</div>}
      <div className="text-3xl">
        {user && (
          <Link to={`/users/${user.id}`}>
            <div className="text-3xl">
              Creator{" "}
              <span className="underline decoration-green-400 ml-[10px] text-3xl">
                {user.name}
              </span>
            </div>
          </Link>
        )}
      </div>
      <Images src={require("../albumImage.jpg")}></Images>
    </div>
  );
}
