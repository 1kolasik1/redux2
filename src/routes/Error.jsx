import { NavLink } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[5vh]">404!</div>
      <div className="text-[10vh]">Page not found</div>
      <div className="text-[3vh]">
        Go to
        <NavLink
          to="/albums"
          className="text-3xl ml-5 underline decoration-green-500"
        >
          Albums
        </NavLink>
      </div>
    </div>
  );
}
