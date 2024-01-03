import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import styled from "styled-components";
import { useTheme } from "../Theme/ThemeProvider";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../../axiosClient";
import GlobalStyles from "../../styles/GlobalStyles";

const StyledDefaultLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Allow the ContentContainer to take up all available space */
  overflow: hidden; /* Hide content overflow */
`;

const DefaultLayout = ({ children }) => {
  const { toggleTheme, theme } = useTheme();
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/auth/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/auth/user").then(({ data }) => {
      setUser(data.data);
    });
  }, []);

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
