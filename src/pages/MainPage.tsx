import React from "react";
import styled from "styled-components";
import LocationMap from "../components/LocationMap";
import Weather from "../components/Weather";
import ChatGptAI from "../components/ChatGptAI";

const MainPage = () => {
  return (
    <MainPageContainer>
      <FirstBoxContainer>
        <FistContainer>
          <SecondContainer>
            <LocationMap />
            <Weather />
            <ChatGptAI />
          </SecondContainer>
        </FistContainer>
      </FirstBoxContainer>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  width: 100%;
  background-color: aliceblue;
  height: 100vh;
`;
const FirstBoxContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
`;
const FistContainer = styled.div`
  width: 355px;
  height: 660px;
  background-color: black;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const SecondContainer = styled.div`
  width: 335px;
  height: 640px;
  background-color: #e7edf5;
  border-radius: 30px;
`;

export default MainPage;
