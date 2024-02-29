import React from "react";
import {
  FirstBoxContainer,
  FistContainer,
  MainPageContainer,
  SecondContainer,
} from "./MainPage";
import LocationMap from "../components/LocationMap";

const KakaoMapPage = () => {
  return (
    <MainPageContainer>
      <FirstBoxContainer>
        <FistContainer>
          <SecondContainer>
            <LocationMap />
          </SecondContainer>
        </FistContainer>
      </FirstBoxContainer>
      <FirstBoxContainer
        style={{ justifyContent: "start" }}
      ></FirstBoxContainer>
    </MainPageContainer>
  );
};

export default KakaoMapPage;
