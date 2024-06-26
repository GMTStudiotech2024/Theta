import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <video autoPlay loop muted playsInline className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat">
            <source src="/assets/images/side5.mp4" type="video/mp4" />
          </video>
        </>
      )}
    </>
  );
}
