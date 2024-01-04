import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../../components/Theme/ThemeProvider";
import GlobalStyles from "../../styles/GlobalStyles";
import { useStateContext } from "../context/ContextProvider";

const StyledGuestLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const GuestLayout = ({ children }) => {
  const { theme } = useTheme();
  const { token, user } = useStateContext();
  const navigate = useNavigate();

  const getStoredInactiveState = useCallback(() => {
    return localStorage.getItem("inactive") === "true";
  }, []);

  useEffect(() => {
    if (!token && user && !user.is_active && user.email_verified_at === null) {
      navigate("/verify", { state: { email: user.email } });
    }
  }, [token, user, navigate]);

  useEffect(() => {
    const shouldNavigate = token && getStoredInactiveState();

    if (shouldNavigate) {
      navigate("/unlock");
    } else if (token && !getStoredInactiveState()) {
      navigate("/");
    }
  }, [token, getStoredInactiveState, navigate]);

  return (
    <>
      <GlobalStyles />
      <StyledGuestLayout theme={theme}>{children}</StyledGuestLayout>
    </>
  );
};

export default GuestLayout;
