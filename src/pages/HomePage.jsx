import React from "react";
import HeroSection from "../components/HeroSection";
import Jobs from '../components/Jobs'
import Category from "../components/Category";
import Page from "../components/Page";
import Review from "../components/Review";
import News from "../components/News";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Jobs />
      <Category />
      <Page />
      <Review />
      <News />
    </div>
  );
}

export default HomePage;
