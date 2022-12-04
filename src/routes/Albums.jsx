import { Link } from "react-router-dom";
import useFetch from "../components/redux/fetchHook";
import { fetchAlbums } from "../components/redux/albumsFetch/actions";
import { selectAlbums } from "../components/redux/albumsFetch/selectors";
import { useSelector } from "react-redux";

export default function Albums() {
  useFetch(fetchAlbums());
  const albums = useSelector(selectAlbums);
  return (
    <div className="underline decoration-green-400 text-2xl">
      {albums.map((album) => (
        <div className="mx-[20px] my-[5px]" key={album.id}>
          <Link key={album.id} to={`/albums/${album.id}`}>
            <div className="flex items-center underline decoration-green-400 text-black hover:decoration-green-900">
              <img
                className="h-[2vh] w-[2vh]"
                src="https://avatars.mds.yandex.net/i?id=af2d4f2a1cf5a08724d0028ae335d5e5-4114158-images-thumbs&n=13"
                alt="img"
              ></img>{" "}
              <div className="mx-[20px] my-[5px]">{album.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
