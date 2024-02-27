import React from "react";
import styled from "styled-components";

const { kakao } = window;

declare global {
  interface Window {
    kakao: any;
  }
}

const LocationMap = () => {
  return (
    <Wrapper>
      <LocationBox />
      <CurrentLocation>현재위치</CurrentLocation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const LocationBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  margin-right: 8px;
`;

const CurrentLocation = styled.div`
  font-family: "GongGothicMedium";
  font-size: 18px;
`;
export default LocationMap;
