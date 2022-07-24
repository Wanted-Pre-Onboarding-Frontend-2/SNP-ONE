import Layout from "../components/layout/Layout";
import { Typography } from "@mui/material";
import React from "react";
import Title from "../elements/Texts/Title";
import Subtitle from "../elements/Texts/Subtitle";
import Text from "../elements/Texts/Text";
import Styled from "styled-components";
import Animation from "../elements/Animations/Animation";
const Home = () => {
  return (
    <Layout>
      <Animation animation="SpinAnimation" />
      <Title size={3} my={80} mx={30}>
        폰트 적용
      </Title>
      <Subtitle size={1.6} my={-1}>
        폰트 적용
      </Subtitle>
      <Text size={1.3} color="red">
        폰트 적용 <br />
        <span>dsfjlksdf</span>
      </Text>
      <Text size={1.3}> 폰트 적용</Text>
      <AA>라라라 라라라</AA>
    </Layout>
  );
};

export default Home;

const AA = Styled.p`
font-family: "font_bold"
`;
