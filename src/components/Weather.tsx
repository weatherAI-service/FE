import React from "react";
import styled from "styled-components";
import weather from "../assets/images/weather.png";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

const Weather = () => {
  const { data, isLoading, isError } = useQuery("weather", getWeather);

  async function getWeather() {
    const weatherKey = process.env.REACT_APP_WEATHERKEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${weatherKey}`
    );
    console.log("날씨 데이터:", response.data);
    return response.data;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching weather data</div>;

  const description = data.weather[0].description;
  const temperature = Math.round(data.main.temp - 273.15);

  return (
    <WeatherContainer>
      <WeatherIcon src={weather} alt="" />
      <WeatherTemperature>{temperature}°C</WeatherTemperature>
    </WeatherContainer>
  );
};

const WeatherComponent = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
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

export default WeatherComponent;
