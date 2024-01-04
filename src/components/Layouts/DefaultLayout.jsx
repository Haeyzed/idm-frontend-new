import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axiosClient from "../../axiosClient";
import GlobalStyles from "../../styles/GlobalStyles";
import { useToast } from "../../utils/useToast";
import { useTheme } from "../Theme/ThemeProvider";
import { useStateContext } from "../context/ContextProvider";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

const StyledDefaultLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const DefaultLayout = ({ children }) => {
  const { toggleTheme, theme } = useTheme();
  const toast = useToast();
  const { user, token, setUser, setToken } = useStateContext();
  const navigate = useNavigate();

  const getStoredInactiveState = () => {
    return localStorage.getItem("inactive") === "true";
  };

  const setStoredInactiveState = (inactive) => {
    localStorage.setItem("inactive", inactive);
  };

  const [inactive, setInactive] = useState(getStoredInactiveState());

  const handleUserActivity = () => {
    setInactive(false);
  };

  const handleInactivity = () => {
    setInactive(true);
    setStoredInactiveState(true);
  };

  useEffect(() => {
    let timeout;

    const resetTimeout = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        handleInactivity();
      }, 60000);
    };

    const events = ["mousemove", "keydown", "mousedown", "touchstart"];

    events.forEach((event) => {
      window.addEventListener(event, handleUserActivity);
    });

    resetTimeout();

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleUserActivity);
      });

      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  useEffect(() => {
    if (inactive && token) {
      toast.success("Profile has been locked");
      navigate("/unlock", { state: { inactive: true } });
    }
  }, [inactive, token, toast, navigate]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/auth/logout").then((response) => {
      setUser({});
      setToken(null);
      setInactive(false);
      setStoredInactiveState(false);
      toast.success(response.data.message);
    });
  };

  // useEffect(() => {
  //   axiosClient.get("/auth/user").then(({ data }) => {
  //     setUser(data.data);
  //   });
  // }, []);

  return (
    <>
      <GlobalStyles />
      <StyledDefaultLayout theme={theme}>
        <Sidebar onLogout={onLogout} />
        <ContentContainer>
          <Header user={user} onLogout={onLogout} />
          <Main>{children}</Main>
        </ContentContainer>
      </StyledDefaultLayout>
    </>
  );
};

export default DefaultLayout;
