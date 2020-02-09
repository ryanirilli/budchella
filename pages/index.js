import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { makeStyledComponent } from "../design-system";
import { useInView } from "react-intersection-observer";
import lottie from "lottie-web";
import budchellaIntro from "../budchella-intro.json";

const Wrapper = makeStyledComponent();
const Container = makeStyledComponent();
const Content = makeStyledComponent();
const Title = makeStyledComponent();
const Top = makeStyledComponent();
const TopContent = makeStyledComponent();
const SectionOne = styled(Container)`
  transform: translateY(-1px);
`;
const Logo = styled(makeStyledComponent())`
  max-width: 100px;
  margin-right: 16px;
  transform: translateY(-2px);
`;

const BandContent = makeStyledComponent();
const Bands = styled(makeStyledComponent())`
  max-width: 100%;
`;
const AnimationContainer = styled(makeStyledComponent())`
  width: 100%;
`;

const intObsOpts = {
  threshold: [0.25],
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
    ? "#F7B31F"
    : isSectionTwoInView
    ? "#000000"
    : "#000000";

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
        <Top absolute="top,left" fontColor="white">
          <TopContent
            flex
            flexAlignCenter
            l={{
              paddingTop: "xl",
              paddingSides: "xl"
            }}
            m={{
              paddingTop: "l",
              paddingSides: "l"
            }}
          >
            <Logo as="img" src="./budchella-logo.svg" /> <div>Mar 27 & 28</div>
          </TopContent>
        </Top>
        <Container
          fullPage
          centerContent
          bgImage="./background.svg"
          bgSize="contain"
          bgPosition="bottom"
        >
          <Content>
            <AnimationContainer ref={introRef} />
          </Content>
        </Container>
        <SectionOne ref={sectionOneRef} fullPage centerContent bgColor="white">
          <BandContent paddingSides="xl" paddingBottom="xxl">
            <Title
              align="center"
              as="h2"
              bold
              paddingTop="xxl"
              paddingBottom="xl"
            >
              LINEUP
            </Title>
            <Bands as="img" src="/budchella-bands.svg" />
          </BandContent>
        </SectionOne>
        <Container ref={sectionTwoRef} fullPage />
      </Wrapper>
    </>
  );
};

export default Home;
