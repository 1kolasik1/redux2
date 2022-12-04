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
    if (userLoading || !user || albumLoading)
      return <div className="font-bold">Loading...</div>;
  };
  validation();
  return (
    <div className="mx-[20px] my-[5px]">
      {user && (
        <>
          <div className="text-black font-bold my-[5px] text-3xl">
            {user.name}
          </div>
          <div className="text-gray-600 text-xl">Username: {user.username}</div>
          <div className="text-gray-600 text-xl">email: {user.email}</div>
          <div className="text-gray-600 text-xl">Site: {user.website}</div>
          <div className="underline mt-[5vh] decoration-green-400">
            {userOfAlbum.map((alb) => {
              return (
                <div className="flex items-center" key={alb.id}>
                  <div className="flex items-center">
                    <img
                      className="h-[2vh] w-[2vh]"
                      src="https://avatars.mds.yandex.net/i?id=af2d4f2a1cf5a08724d0028ae335d5e5-4114158-images-thumbs&n=13"
                      alt="img"
                    ></img>{" "}
                  </div>
                  <Link key={alb.id} to={`/albums/${alb.id}`}>
                    <div className="m-[5px] text-2xl text-black underline decoration-green-400 hover:decoration-green-800 ">
                      {alb.title}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
