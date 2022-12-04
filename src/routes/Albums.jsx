import { Link } from "react-router-dom";
import "./Albums.css";
import useFetch from "../components/redux/fetchHook";
import { fetchAlbums } from "../components/redux/albumsFetch/actions";
import { selectAlbums } from "../components/redux/albumsFetch/selectors";
import { useSelector } from "react-redux";

export default function Albums() {
  useFetch(fetchAlbums());
  const albums = useSelector(selectAlbums);
  return (
    <div className="albums">
      {albums.map((album) => (
        <div className="ourAlbum" key={album.id}>
          <Link key={album.id} to={`/albums/${album.userId}`}>
            <div className="textAlbum">
              <img
                className="littleImages"
                src="https://avatars.mds.yandex.net/i?id=af2d4f2a1cf5a08724d0028ae335d5e5-4114158-images-thumbs&n=13"
                alt="img"
              ></img>{" "}
              <div className="ourAlbum">{album.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
