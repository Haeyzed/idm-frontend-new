import React, { useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../../components/Theme/ThemeProvider";
import { useStateContext } from "../context/ContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Toast from "../common/Toast";

const StyledGuestLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const GuestLayout = ({ children }) => {
  const { theme } = useTheme();
  const { token, user } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && user && !user.is_active && user.email_verified_at === null) {
      navigate("/verify", { state: { email: user.email } });
    }
  }, [token, user, navigate]);

  if (token) {
    return <Navigate to="/" />;
  }

  return (
      <StyledGuestLayout theme={theme}>{children}</StyledGuestLayout>
  );
};

export default GuestLayout;
