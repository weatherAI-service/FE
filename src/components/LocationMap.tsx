import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Navigate, useNavigate } from "react-router-dom";

const LocationMap = () => {
  const [showMap, setShowMap] = useState(false);
  const navigate = useNavigate();

  const getLocation = () => {
    setShowMap(!showMap);
  };

  return (
    <Wrapper>
      <IoLocationOutline
        style={{ width: "23px", height: "23px", cursor: "pointer" }}
        onClick={() => {
          navigate("/map");
        }}
      />
      <CurrentLocation>현재위치</CurrentLocation>

      {/* <Map
        center={{ lat: 37.5662952, lng: 126.9779451 }}
        style={{ width: "100%", height: "400px" }}
      >
        <MapMarker position={{ lat: 37.5662952, lng: 126.9779451 }} />
      </Map> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

const CurrentLocation = styled.div`
  font-family: "GongGothicMedium";
  font-size: 18px;
`;

export default LocationMap;
