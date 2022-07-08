import React from 'react';
import NavBar from '../../components/nav/nav';
import styled from 'styled-components';
import down_chevron from '../../assets/chevron-down.png';
import compras from '../../assets/compras.svg';

const Hero = styled.header``;

export default function Home() {
  return (
    <Hero>
      <NavBar />
      {/* <Hero>
        <HeroText>
          <h1>Explore nossa nova coleção</h1>
          <h2>
            Aproveite as ofertas e encontre o look ideal para aproveitar o seu
            São João na Lojinha.
          </h2>
          <HeroButton>
            <p>Ver descontos</p>
            <img src={down_chevron} alt="Down chevron" />
          </HeroButton>
        </HeroText>
        <Compras src={compras} alt="Shopping bags" />
      </Hero> */}
    </Hero>
  );
}
