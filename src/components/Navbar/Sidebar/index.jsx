import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const getActiveStyles = ({ isActive }) => {
    const style = "text-2xl p-2 text-white  flex items-center rounded-r-3xl font-bold";
    return isActive
      ? `bg-orange-500 ${style}`
      : `hover:bg-orange-500 bg-blue-500 ${style}`;
  };

  return (
    <aside className="flex flex-col gap-4 bg-gray-200 h-screen w-60 p-8 pt-11">
      <NavLink className={getActiveStyles} to="/">
        <span className="material-symbols-outlined p-1">home</span>
        <span className="font-bold">Home</span>
      </NavLink>
      <NavLink className={getActiveStyles} to="/archive">
        <span class="material-symbols-outlined p-1">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getActiveStyles} to="/important">
        <span class="material-symbols-outlined p-1">stars</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getActiveStyles} to="/bin">
        <span class="material-symbols-outlined p-1">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
export default Sidebar;
