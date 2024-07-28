import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";
import { Loader } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import gmtStudioLogo from '/assets/icons/Theta.png';

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();
  const [isExpanded, setIsExpanded] = useState(true);

  const { mutate: signOut } = useSignOutAccount();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`leftsidebar ${isExpanded ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex gap-3 items-center">
            <img src={gmtStudioLogo} className="w-auto h-12 md:h-16" alt="Theta Logo" />
            {isExpanded && <h2 className="h3-bold md:h3-bold text-left w-full text-sky-500">Theta v0.7e</h2>}
          </Link>
          <Button
            variant="ghost"
            className="p-2"
            onClick={toggleSidebar}
          >
            {isExpanded ? '<<' : '>>'}
          </Button>
        </div>

        {isLoading || !user.email ? (
          <div className="h-14">
            <Loader />
          </div>
        ) : (
          <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-13 w-14 rounded-full"
            />
            {isExpanded && (
              <div className="flex flex-col">
                <p className="body-bold">{user.name}</p>
                <p className="small-regular text-fuchsia-400">@{user.username}</p>
              </div>
            )}
          </Link>
        )}

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-gradient-to-br from-[#00c9ff] to-[#92fe9d]"
                }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-3 items-center p-4">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {isExpanded && link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost mt-auto"
        onClick={(e) => handleSignOut(e)}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        {isExpanded && <p className="small-medium lg:base-medium text-sky-400">Logout 登出</p>}
      </Button>
    </nav>
  );
};

export default LeftSidebar;
