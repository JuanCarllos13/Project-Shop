import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

globalStyles();
import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from 'next/legacy/image'

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default App;
