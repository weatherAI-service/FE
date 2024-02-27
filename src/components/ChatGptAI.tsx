import React from "react";
import styled from "styled-components";
import people from "../assets/images/people.png";

const ChatGptAI = () => {
  return (
    <AiContainer>
      <div>
        <PeopleImg src={people} alt="" />
      </div>
      <FashionRecommendContainer>
        <HatRecommend>모자: 비니</HatRecommend>
        <TopRecommend>상의: 두꺼운 자켓</TopRecommend>
        <BottomRecommend>하의: 두꺼운 바지</BottomRecommend>
        <ShoesRecommend>신발: 어그부츠</ShoesRecommend>
      </FashionRecommendContainer>
    </AiContainer>
  );
};

const AiContainer = styled.div`
  margin-top: 75px;
  background-color: #ffffff;
  height: 340px;
  border-radius: 30px;

  display: flex;
`;

const PeopleImg = styled.img`
  width: 180px;
  height: 300px;
  margin-top: 20px;
`;

const FashionRecommendContainer = styled.div`
  margin-top: 60px;
`;

const HatRecommend = styled.div`
  font-family: "GongGothicMedium";
  font-size: 18px;
`;

const TopRecommend = styled.div`
  font-family: "GongGothicMedium";
  font-size: 18px;
  margin-top: 50px;
`;

const BottomRecommend = styled.div`
  font-family: "GongGothicMedium";
  font-size: 18px;
  margin-top: 50px;
`;

const ShoesRecommend = styled.div`
  font-family: "GongGothicMedium";
  font-size: 18px;
  margin-top: 50px;
`;
export default ChatGptAI;
