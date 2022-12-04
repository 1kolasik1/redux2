import "./Error.css";
import { NavLink } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="error">
      <div className="page404">404!</div>
      <div className="pageNotFound">Page not found</div>
      <div className="goToAlbums">
        Go to
        <NavLink
          to="/albums"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-notactive"
          }
        >
          Albums
        </NavLink>
      </div>
    </div>
  );
}
