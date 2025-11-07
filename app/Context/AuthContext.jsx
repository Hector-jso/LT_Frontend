"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest, verityTokenRequet } from "@/app/api/auth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data.errors)) {
        return setErrors(error.response.data.errors);
      }
      if (error.response.data?.errors){
        setErrors([error.response.data.message]);
      }
      setErrors([error.response.data.errors]);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data.errors)) {
        return setErrors(error.response.data.errors);
      }
      if (error.response.data?.errors){
        setErrors([error.response.data.message]);
      }
      setErrors([error.response.data.errors]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verityTokenRequet(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setLoading(false);
        setUser(res.data);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return error;
      }
    }
    checkLogin();
  }, []);

  return <AuthContext.Provider value={{ signup, signin, user, isAuthenticated, errors, loading }}>{children}</AuthContext.Provider>;
};
