import React from "react";
import styled from "styled-components";

const Login = () => {
  return <Container></Container>;
};

export default Login;
const Container = styled.div`
  height: calc(100vh - 70px);
  width: calc (3.5vw + 5px);
  position: relative;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
  }
`;
const Background = styled.div`
  img {
    height: screen;
  }
`;
