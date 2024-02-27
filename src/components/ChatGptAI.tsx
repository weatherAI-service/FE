import React, { useState } from "react";
import styled from "styled-components";
import people from "../assets/images/people.png";
import axios from "axios";

interface ChatGptAIProps {
  weatherInfo: string | undefined
};

const ChatGptAI : React.FC<ChatGptAIProps> = ({ weatherInfo }) => {

  const [gptResMsg, setGptResMsg] = useState<string | undefined>();

  const fetchResponse = async () => {
    try {
      const apiKey = process.env.REACT_APP_CHATGPT_KEY;

      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `날씨가 맑고 기온이 영하 -4도인 상태에서 입고나가기 좋은 옷 종류를 한국말로 배열에 전부 담아서 보내줘.` // Replace with your starting message
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        }
      );

      console.log("gpt 응답값", res.data.choices[0].message.content);
    } catch (error) {

    };
  };

  return (
    <AiLayout>
      <IntroduceButton onClick={fetchResponse}>
        {gptResMsg}
      </IntroduceButton>
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
    </AiLayout>
  );
};

const AiLayout = styled.article`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const IntroduceButton = styled.button`
  width: 120px;
  height: 36px;
  border: none;
  outline: none;
  background-color: aquamarine;
  font-family: "GongGothicMedium";
  cursor: pointer;
`;

const AiContainer = styled.div`
  background-color: #ffffff;
  height: 340px;
  border-radius: 30px;
  width: 96%;
  display: flex;
  margin: 0px auto
`;

const PeopleImg = styled.img`
  width: 160px;
  height: 280px;
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
