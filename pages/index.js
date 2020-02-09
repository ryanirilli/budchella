import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { E } from "../design-system";
import { useInView } from "react-intersection-observer";
import lottie from "lottie-web";
import budchellaIntro from "../budchella-intro.json";

const Wrapper = React.forwardRef((p, ref) => <E {...p} ref={ref} />);
const Container = React.forwardRef((p, ref) => <E {...p} ref={ref} />);
const Content = React.forwardRef((p, ref) => <E {...p} ref={ref} />);

const intObsOpts = {
  threshold: [0.5],
  triggerOnce: false
};

const Home = () => {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
  const introRef = useRef();
  const [sectionOneRef, isSectionOneInView] = useInView(intObsOpts);
  const [sectionTwoRef, isSectionTwoInView] = useInView(intObsOpts);
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: introRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: budchellaIntro
    });
    animation.addEventListener("DOMLoaded", () => {
      setIsAnimationLoaded(true);
      animation.play();
    });
  }, []);

  const bgColor = isSectionOneInView
    ? "#022859"
    : isSectionTwoInView
    ? "#000000"
    : "#F7B31F";

  return (
    <>
      <Head>
        <title>Budchella Music and Arts Frestival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper
        isVisible={isAnimationLoaded}
        bgColor={bgColor}
        transition="background"
      >
        <Container
          fullPage
          centerContent
          bgImage="./background.svg"
          bgSize="contain"
          bgPosition="bottom"
        >
          <Content>
            <div ref={introRef} />
          </Content>
        </Container>
        <Container ref={sectionOneRef} fullPage bgColor="white" />
        <Container ref={sectionTwoRef} fullPage />
      </Wrapper>
    </>
  );
};

export default Home;
