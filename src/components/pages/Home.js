import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CardsItem2 from '../CardItem2'
function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <CardsItem2 />
      <Footer />
    </>
  );
}

export default Home;