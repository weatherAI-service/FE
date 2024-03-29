import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Weather from "../components/Weather";
import ChatGptAI from "../components/ChatGptAI";
import LogoImage from "../assets/images/logo.png";
import { useRecoilState } from "recoil";
import { addressState } from "../utils/Address";
import LocationMap from "../components/LocationMap";

const MainPage = () => {
  const [currentAddress] = useRecoilState<string>(addressState);
  const [weatherInfo, setWeatherInfo] = useState<string | undefined>();

  useEffect(() => {
    console.log("currentAddress:", currentAddress);
  }, [currentAddress]);
  return (
    <MainPageContainer>
      <FirstBoxContainer>
        <FistContainer>
          <SecondContainer>
            <LocationMap />
            <Weather />
            <ChatGptAI weatherInfo={weatherInfo} />
          </SecondContainer>
        </FistContainer>
      </FirstBoxContainer>
      <FirstBoxContainer style={{ justifyContent: "start" }}>
        <SecondBoxContainer>
          <Logo src={LogoImage} alt="" />
        </SecondBoxContainer>
      </FirstBoxContainer>
    </MainPageContainer>
  );
};

export const MainPageContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 100vh;
  display: flex;
`;

export const FirstBoxContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: end;
`;
export const FistContainer = styled.div`
  width: 375px;
  height: 720px;
  background-color: black;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0px;
`;
export const SecondContainer = styled.div`
  width: 355px;
  height: 700px;
  background-color: #e7edf5;
  border-radius: 30px;
`;
export const SecondBoxContainer = styled(FistContainer)`
  background-color: transparent;
`;
const Logo = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

export default MainPage;
