import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate, redirect } from "react-router-dom";
import LoadingIndicator from "../components/loading_indicator";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login({ email, password }, redirectUrl = "/") {
    try {
      const response = await axios.post(
        "auth/jwt/create/",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setAuthToken(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("tokens", JSON.stringify(response.data));
        navigate(redirectUrl);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async function registerUser(user, image) {
    console.log(user, image);
    try {
      const formData = new FormData();
      for (let i = 0; i < Object.keys(user).length; i++) {
        formData.append(`${Object.keys(user)[i]}`, Object.values(user)[i]);
      }
      formData.append("image", image);
      const formDataObject = Object.fromEntries(formData);

      const url = "auth/users/";

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        const data = {
          email: user.email,
          password: user.password,
        };
        login(data);
      }
    } catch {
      console.log("catched");
    }
  }
  async function updateToken() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/jwt/refresh/",
        { refresh: authToken?.refresh },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setAuthToken(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("tokens", JSON.stringify(response.data));
      } else {
        logout();
      }
      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      throw error;
    }
  }

  function logout() {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("tokens");
    navigate("/", { replace: true });
  }

  useEffect(() => {
    const storedTokens = localStorage.getItem("tokens");
    if (storedTokens) {
      const parsedTokens = JSON.parse(storedTokens);
      setAuthToken(parsedTokens);
      setUser(jwtDecode(parsedTokens.access));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const tokenRefreshInterval = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, 1000 * 60 * 55);

    return () => {
      clearInterval(tokenRefreshInterval);
    };
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user, login, logout, registerUser }}>
      {loading ? <LoadingIndicator /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
