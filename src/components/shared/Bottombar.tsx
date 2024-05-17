import { Link, useLocation } from "react-router-dom";
import { bottombarLinks } from "@/constants";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 shadow-lg flex justify-around items-center z-50 md:hidden">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`flex flex-col items-center gap-1 p-2 transition ${
              isActive ? "bg-gradient-to-br from-green-700 to-green-400 rounded-lg" : ""
            }`}>
            <img
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
              className={`${isActive ? "filter invert" : ""}`}
            />
            <p className={`text-xs ${isActive ? "text-white" : "text-gray-300"}`}>{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
