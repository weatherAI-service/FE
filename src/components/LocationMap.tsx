import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";

const LocationMap = () => {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  const navigate = useNavigate();
  // 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      if (container) {
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        setMap(new window.kakao.maps.Map(container, options));

        // 마커 위치 설정
        const markerPosition = new window.kakao.maps.LatLng(
          37.5662952,
          126.9779451
        );
        setMarker(new window.kakao.maps.Marker({ position: markerPosition }));
      }
    });
  }, []);

  // 2) 현재 위치 함수
  const getCurrentPosBtn = () => {
    navigator.geolocation.getCurrentPosition(
      getPosSuccess,
      () => alert("위치 정보를 가져오는데 실패했습니다."),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  };

  // 3) 정상적으로 현재위치 가져올 경우 실행
  const getPosSuccess = (pos: GeolocationPosition) => {
    // 현재 위치(위도, 경도) 가져온다.
    var currentPos = new window.kakao.maps.LatLng(
      pos.coords.latitude, // 위도
      pos.coords.longitude // 경도
    );
    // 지도를 이동 시킨다.
    map.panTo(currentPos);

    // 기존 마커를 제거하고 새로운 마커를 생성 및 지도에 추가한다.
    if (marker) {
      marker.setMap(null); // 기존 마커 제거
    }
    const newMarker = new window.kakao.maps.Marker({ position: currentPos });
    newMarker.setMap(map); // 새로운 마커를 지도에 추가
    setMarker(newMarker); // 마커 상태 업데이트
  };

  return (
    <>
      <Wrapper>
        <IoLocationOutline
          style={{ width: "23px", height: "23px", cursor: "pointer" }}
          onClick={() => {
            navigate("/map");
          }}
        />
        <CurrentLocation onClick={getCurrentPosBtn}>현재위치</CurrentLocation>
      </Wrapper>
      <MapContainer id="map">
        {/* 지도를 렌더링할 컨테이너 요소 */}
        <Map
          center={{ lat: 37.5662952, lng: 126.9779451 }}
          style={{ width: "100%", height: "400px" }}
        >
          <MapMarker position={{ lat: 37.5662952, lng: 126.9779451 }} />
        </Map>
      </MapContainer>
    </>
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

const MapContainer = styled.div`
  margin-top: 20px;
`;
export default LocationMap;
