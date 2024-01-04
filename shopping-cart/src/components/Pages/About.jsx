import React from "react";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import BreadCrumb from "../Sections/BreadCrumb";
import aboutImg from "../../assets/about_us_video.png";
import Collection from "../Sections/Collection";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../Sections/ErrorFallback";

const About = () => {

  // function fallbackRender({ error, resetErrorBoundary }) {
  //   // Call resetErrorBoundary() to reset the error boundary and retry the render.
  
  //   return (
  //     <div role="alert">
  //       <p>Something went wrong:</p>
  //       <pre style={{ color: "red" }}></pre>
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* <ErrorBoundary fallback={<ErrorFallback />}>
        <Header />
      </ErrorBoundary> */}
      {/* <ErrorBoundary fallbackRender={fallbackRender}>
        <Header />
      </ErrorBoundary> */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => null}>
        <Header />
      </ErrorBoundary>

      <BreadCrumb text={"About"} />
      <div className="about-sec">
        <div className="content">
          <h2>Our Mission</h2>
          <p>
            Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor
            sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices
            nec sed neque.
          </p>
        </div>
        <img src={aboutImg} alt="" />
      </div>
      <div className="more">
        <h2>
          Credibly innovate granular internal or organic sources whereas
          standards.
        </h2>
        <p>
          Seamlessly empower fully researched growth strategies and
          interoperable internal or “organic” sources. Credibly innovate
          granular internal or “organic” sources whereas high standards in
          web-readiness.
        </p>
      </div>
      <Collection />
      <Footer />
    </div>
  );
};

export default About;
