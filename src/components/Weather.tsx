import React from "react";
import styled from "styled-components";
import weather from "../assets/images/weather.png";

const Weather = () => {
  return (
    <WeatherContainer>
      <WeatherIcon src={weather} alt="" />
      <WeatherTemperature>15°C</WeatherTemperature>
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 50px;
`;

const WeatherIcon = styled.img`
  width: 130px;
  height: 130px;
`;

const WeatherTemperature = styled.div`
  position: absolute;
  background-color: #a3bdf7;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  top: 100px;
  right: -20px;
  font-family: "GongGothicMedium";
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Weather;
