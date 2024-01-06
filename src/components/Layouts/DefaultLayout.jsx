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
  // min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const DefaultLayout = ({ children, title }) => {
  const { toggleTheme, theme } = useTheme();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { user, token, setUser, setToken } = useStateContext();
  const navigate = useNavigate();

  const getStoredInactiveState = () => {
    return localStorage.getItem("inactive") === "true";
  };

  const setStoredInactiveState = (inactive) => {
    localStorage.setItem("inactive", inactive);
  };

  const [inactive, setInactive] = useState(getStoredInactiveState());
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

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
      }, 600000);
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

  const onLogout = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const endpoint = "/auth/logout";
      const response = await axiosClient.post(endpoint);

      setUser({});
      setToken(null);
      setInactive(false);
      setStoredInactiveState(false);
      toast.success(response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GlobalStyles />
      <StyledDefaultLayout theme={theme}>
        <Sidebar
          onLogout={onLogout}
          collapsed={sidebarCollapsed}
          onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <ContentContainer>
          <Header
            title={title}
            toggleTheme={toggleTheme}
            user={user}
            onLogout={onLogout}
            isLoading={isLoading}
            onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
          <Main>{children}</Main>
        </ContentContainer>
      </StyledDefaultLayout>
    </>
  );
};

export default DefaultLayout;
