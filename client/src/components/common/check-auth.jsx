import { use } from "react";
import { useLocation, Navigate } from "react-router-dom";


const checkAuth = ({ isAuthenticated, user, children }) => {
  // Logic to check if the user is authenticated
  const location = useLocation();

  if(!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    return <Navigate to="/auth/login"/>;
  }

  if(isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))){
    if(user?.role === "admin") {
        return <Navigate to="/admin/dashboard"/>;
    }else{
        return <Navigate to="/shop/home"/>;
    }
  }

  if(isAuthenticated && user?.role !== "admin" && location.pathname.includes("admin")){
    return <Navigate to="/unauth-page"/>;
  }
  if(isAuthenticated && user?.role === "admin" && location.pathname.includes("shop")){
    return <Navigate to="/admin/dashboard"/>;
  }
  return <>{children}</>;
}

export default checkAuth;