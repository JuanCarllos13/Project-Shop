import { HomeContainer, Product } from "@/styles/pages/home";
import Head from "next/head";
import Image from "next/legacy/image";

import Logo1 from "@/assets/1.png";
import Logo2 from "@/assets/2.png";
import Logo3 from "@/assets/3.png";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    },
  });
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={Logo1} width={520} height={480} alt="" />

          <footer>
            <strong>Camisa x </strong>
            <span>R$ 49.90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={Logo2} width={520} height={480} alt="" />

          <footer>
            <strong>Camisa x </strong>
            <span>R$ 49.90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={Logo3} width={520} height={480} alt="" />

          <footer>
            <strong>Camisa x </strong>
            <span>R$ 49.90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={Logo3} width={520} height={480} alt="" />

          <footer>
            <strong>Camisa x </strong>
            <span>R$ 49.90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  );
}
