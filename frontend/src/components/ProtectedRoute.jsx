import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ token, children }) {
  const hasToken = token || localStorage.getItem("token");
  if (!hasToken) return <Navigate to="/login" replace />;
  return children;
}
