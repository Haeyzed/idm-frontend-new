import React from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import styled from "styled-components";
import Card from "../../components/common/Card";

const DashboardContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Dashboard = () => {
  return (
    <DefaultLayout title="Dashboard">
      <DashboardContainer>
        
      </DashboardContainer>
    </DefaultLayout>
  );
};

export default Dashboard;
