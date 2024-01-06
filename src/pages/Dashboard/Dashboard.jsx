import React from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import styled from "styled-components";
import Card from "../../components/common/Card";

const DashboardContainer = styled.div`
  position: relative;
  width: 100%;
`;

const MainSection = styled.div`
  display: flex;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Dashboard = () => {
  return (
    <DefaultLayout title="Dashboard">
      <DashboardContainer>
        <MainSection>
          <Main></Main>
        </MainSection>
      </DashboardContainer>
    </DefaultLayout>
  );
};

export default Dashboard;
