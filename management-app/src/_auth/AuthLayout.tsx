import { Navigate, Outlet } from "react-router-dom";
//@ts-ignore
import authImage from '/assets/images/auth-layout.png'

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <div className="auth-page">
            <img src={authImage} className="w-[400px] h-auto" alt="login-img" />
            <h2 className="h2-bold text-light-1">Easyparkway is Communal Parking <br/> Management made simple.</h2>
            <h2 className="h2-bold text-light-1"></h2>
            <p className="text-light-1 mx-32">Welcome to Easyparkway, a Community that allows you to Lease and Share Parking Spots for Visitors</p>
          </div>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
