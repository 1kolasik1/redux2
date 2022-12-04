import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const setActive = ({ isActive }) =>
    isActive ? "link-active" : "link-notactive";
  return (
    <div className="all">
      <header>
        <NavLink to="/albums" end={true} className={setActive}>
          Albums
        </NavLink>
        <NavLink to="/users" className={setActive}>
          Users
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="ourFooter">
        <div className="shellFooter">
          <div className="creatorOfSite">
            <div>Created By:</div>
            <a className="linkToCreator" href="https://vk.com/kolasikpivasik">
              nikgor
            </a>
          </div>
          <div className="bsu">
            <a className="linkToBsu" href="https://bsu.by">
              BSU 2022
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
