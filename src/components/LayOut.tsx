import React from "react";
import styled from "styled-components";

const LayOut = () => {
  return (
    <div>
      <MainPageContainer>
        <FirstBoxContainer>
          <FistContainer>
            <SecondContainer></SecondContainer>
          </FistContainer>
        </FirstBoxContainer>
      </MainPageContainer>
    </div>
  );
};

const MainPageContainer = styled.div`
  background-color: aliceblue;
  height: 100vh;
`;
const FirstBoxContainer = styled.div`
  width: 50%;
  background-color: lightblue;
  height: 100vh;
  display: flex;
`;
const FistContainer = styled.div`
  width: 355px;
  height: 630px;
  background-color: black;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const SecondContainer = styled.div`
  width: 335px;
  height: 610px;
  background-color: #e7edf5;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default LayOut;
