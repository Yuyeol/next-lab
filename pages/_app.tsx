import global from '@/styles/GlobalStyle';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #e7e7e7;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Global styles={global} />
      <Component {...pageProps} />
    </Container>
  );
}
