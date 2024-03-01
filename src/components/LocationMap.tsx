import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LocationMap = () => {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const [currentAddress, setCurrentAddress] = useState<string>("");

  const navigate = useNavigate();

  const kakaoKey = process.env.REACT_APP_KAKAOMAP_REST_API;

  // 위도와 경도를 사용하여 주소를 가져오는 함수
  const getFormattedAddress = async (latitude: number, longitude: number) => {
    try {
      const res = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoKey}`, // kakaoKey는 어딘가에서 가져와야 합니다.
          },
        }
      );
      console.log("주소 데이터", res);
      if (res.data.documents && res.data.documents.length > 0) {
        return res.data.documents[0].address.address_name;
      } else {
        return "주소를 찾을 수 없습니다.";
      }
    } catch (error) {
      console.error("주소를 가져오는데 오류가 발생했습니다:", error);
      return "주소를 가져오는데 오류가 발생했습니다.";
    }
  };

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
      getPosError, // 위치 정보 가져오기 실패 시 처리하는 함수
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  };

  // 3) 정상적으로 현재위치 가져올 경우 실행
  const getPosSuccess = async (pos: GeolocationPosition) => {
    // 현재 위치(위도, 경도) 가져온다.
    var currentPos = new window.kakao.maps.LatLng(
      pos.coords.latitude, // 위도
      pos.coords.longitude // 경도
    );

    // 위도 경도 변수 저장
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    console.log("현재 위치:", latitude, longitude);

    // 현재 위치를 주소로 변환
    const address = await getFormattedAddress(latitude, longitude);
    setCurrentAddress(address);

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

  // 3-1) 위치 정보 가져오기 실패
  const getPosError = () => {
    alert("위치 정보를 가져오는데 실패했습니다.");
  };
  return (
    <>
      <Wrapper onClick={getCurrentPosBtn}>
        <IoLocationOutline
          style={{ width: "23px", height: "23px", cursor: "pointer" }}
          onClick={() => {
            navigate("/map");
          }}
        />
        <CurrentLocation>{currentAddress}</CurrentLocation>
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
