import React, { useState } from "react";
import styled from "styled-components";
import weather from "../assets/images/weather.png";
import axios from "axios";

const Weather = () => {
  const [weatherDescription, setWeatherDescription] = useState<string>("");

  const getWeather = async (): Promise<void> => {
    const weatherKey = process.env.REACT_APP_WEATHERKEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${weatherKey}`
      );
      console.log(response, "답");
      const data = response.data;
      if (data.cod === 200) {
        const description = data.weather[0].description;
        setWeatherDescription(description);
        // setClothesRecommend(clothesRecommend(description));
      } else {
        console.log("날씨 정보를 가져오는 데 문제가 발생했습니다.");
      }
    } catch (error) {
      console.log("날씨 정보를 가져오는 데 문제가 발생했습니다.", error);
    }
  };
  return (
    <WeatherContainer>
      <WeatherIcon src={weather} alt="" />
      <WeatherTemperature onClick={getWeather}>15°C</WeatherTemperature>
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
