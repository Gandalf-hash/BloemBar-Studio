import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import App from "../App";
import About from "./About";
import Shop from "./Shop";
import NewArrival from "./NewArrival";
import Banner from "./Banner";
import Footer from "./Footer";

const Section = styled.section`

`;

function Home() {
  return (
    <Section id="home">
      <CoverVideo />
      <Logo />
      <NavBar />
      <About />
      <Shop />
      <Banner />
      <NewArrival />
      <Footer />
    </Section>
  );
}

export default Home;
