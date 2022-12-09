import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const setActive = ({ isActive }) =>
    isActive
      ? "ml-0 font-bold sm:font-bold mx-[20px] text-white ease-out underline"
      : "ml-0 font-bold sm:ease-out mx-[20px] font-regular text-gray-700 underline decoration-grey-400";
  return (
    <div className="min-h-screen">
      <header className="flex justify-between  sm:block bg-gray-900 pl-[20px] pr-[20px] pt-[30px] pb-[20px]  text-3xl">
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
      <footer className="mx-0 sticky top-full   my-[20px] sm:mx-[100px]">
        <div className="flex justify-between border-solid border-t-2 border-t-black font-bold text-2xl sm:border-t-4">
          <div className="flex justify-center items-center">
            <div>Created By:</div>
            <a
              className="ml-5 text-gray-400"
              href="https://vk.com/kolasikpivasik"
            >
              nikgor
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
