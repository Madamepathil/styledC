import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

const login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <h1 onClick={signIn}>login</h1>
    </Container>
  );
};

export default login;
const Container = styled.div``;
