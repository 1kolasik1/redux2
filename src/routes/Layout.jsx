import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const setActive = ({ isActive }) =>
    isActive
      ? "font-bold ml-[20px] text-white ease-out underline"
      : "ease-out ml-[20px] font-regular text-gray-700 underline decoration-grey-400";
  return (
    <div className="min-h-screen">
      <header className="bg-gray-900 pl-[20px] pr-[20px] pt-[30px] pb-[20px] h-[10vh] text-3xl">
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
      <footer className="sticky top-full h-[10vh] mx-[100px] my-[20px]">
        <div className="flex justify-between border-solid border-t-4 border-t-black font-bold text-2xl">
          <div className="flex">
            <div>Created By:</div>
            <a className="ml-5" href="https://vk.com/kolasikpivasik">
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
