import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat','sans-seriff';
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6wv, 4.5rem);
`;
export const Heading = styled.h2``;
export const TextWrapper = styled.span``;
export const Section = styled.section``;
export const Row = styled.div``;
export const Column = styled.div``;
export const Button = styled.button``;
