import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
const { user } = useUserAuth();

const navigate = useNavigate();

  console.log("Check user in Private: ", user);
  if (!user) {
    console.log("ravina");
    
  }
  return children;
};

export default ProtectedRoute;