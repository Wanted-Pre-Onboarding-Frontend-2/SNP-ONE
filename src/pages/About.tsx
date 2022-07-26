import React from "react";
import styled from "styled-components";
import CircularMenu from "../components/layout/CircularMenu";
import Animation from "../elements/Animations/Animation";
import Card from "../components/layout/Card";
import { ProfileCardInfo } from "../static/Infomations/ProfileCardInfo";
const About = () => {
  const shuffle = (array: any) => [...array].sort(() => Math.random() - 0.5);
  return (
    <>
      <Animation animation="underwaterAnimation" />
      <Wrapper>
        <CircularMenu />
        <FlexBox>
          {ProfileCardInfo &&
            shuffle(
              ProfileCardInfo.map((profile) => (
                <Card
                  key={profile.name}
                  name={profile.name}
                  called={profile.called}
                  desc={profile.desc}
                  profilePicture={profile.profilePicture}
                />
              )),
            )}
        </FlexBox>
      </Wrapper>
    </>
  );
};

export default About;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

const FlexBox = styled.div`
  display: flex;
  padding-top: 10rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
`;
