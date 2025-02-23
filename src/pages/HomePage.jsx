import React from "react";
import HeroSection from "../components/HeroSection";
import JobLists from '../components/JobLists'
import Category from "../components/Category";
import Page from "../components/Page";
import Review from "../components/Review";
import News from "../components/News";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <JobLists />
      <Category />
      <Page />
      <Review />
      <News />
    </div>
  );
}

export default HomePage;
