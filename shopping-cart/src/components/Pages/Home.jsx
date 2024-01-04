import React from "react";
import Header from "../Sections/Header";
import Mens from "../Sections/Product Sections/Mens";
import Women from "../Sections/Product Sections/Women";
import Kids from "../Sections/Product Sections/Kids";
import Banner from "../Sections/Banner";
import Newsletter from "../Sections/Newsletter";
import Collection from "../Sections/Collection";
import Features from "../Sections/Features";
import Footer from "../Sections/Footer";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../Sections/ErrorFallback";

const Home = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => null}>
        <Header />
      </ErrorBoundary>
      <Banner />
      <Mens />
      <Women />
      <Kids />
      <Newsletter />
      <Features />
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
