import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { E } from "../design-system";
import { useInView } from "react-intersection-observer";
import lottie from "lottie-web";
import budchellaIntro from "../budchella-intro.json";

const Container = React.forwardRef((p, ref) => <E {...p} ref={ref} />);
const Content = React.forwardRef((p, ref) => <E {...p} ref={ref} />);

const intObsOpts = {
  threshold: [0.5],
  triggerOnce: true
};

const Home = () => {
  const introRef = useRef();
  const [sectionOneRef, isSectionOneInView] = useInView(intObsOpts);
  const [sectionTwoRef, isSectionTwoInView] = useInView(intObsOpts);
  useEffect(() => {
    lottie.loadAnimation({
      container: introRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: budchellaIntro
    });
  }, []);
  return (
    <>
      <Head>
        <title>Budchella Music and Arts Frestival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fullPage centerContent>
        <Content>
          <div ref={introRef} />
        </Content>
      </Container>
      <Container ref={sectionOneRef} fullPage />
      <Container ref={sectionTwoRef} fullPage />
    </>
  );
};

export default Home;
