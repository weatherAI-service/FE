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
      <div>현재위치</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border: 1px solid black;
`;

const LocationBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  margin-right: 8px;
`;

export default LocationMap;
