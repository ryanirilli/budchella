import React, { useEffect, useRef, useState } from "react";
import styled, { withTheme } from "styled-components";
import Head from "next/head";
import { makeStyledComponent } from "../design-system";
import { useInView } from "react-intersection-observer";
import lottie from "lottie-web";
import budchellaIntro from "../budchella-intro.json";

const Wrapper = makeStyledComponent();
const Container = makeStyledComponent();
const Content = makeStyledComponent();
const Text = makeStyledComponent();
const Top = makeStyledComponent();
const TopContent = makeStyledComponent();
const VenueContent = makeStyledComponent();
const LearnMoreButton = makeStyledComponent();
const SectionOne = styled(Container)`
  transform: translateY(-1px);
`;
const Logo = styled(makeStyledComponent())`
  max-width: 150px;
  margin-right: 16px;
  transform: translateY(-2px);
`;
const Bands = styled(makeStyledComponent())`
  max-width: 350px;
`;
const AnimationContainer = styled(makeStyledComponent())`
  width: 100%;
`;

const intObsOpts = {
  threshold: [0.25],
  triggerOnce: false
};

const Home = ({ theme }) => {
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

  const bgColor =
    isSectionOneInView && !isSectionTwoInView
      ? theme.colors.yellow
      : isSectionTwoInView
      ? theme.colors.black
      : theme.colors.black;

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
          bgSize="contain"
          bgPosition="bottom"
          m={{ bgImage: "/background-no-center-dots.svg" }}
          l={{ bgImage: "/background.svg" }}
        >
          <Content>
            <AnimationContainer ref={introRef} />
          </Content>
        </Container>
        <SectionOne ref={sectionOneRef} centerContent bgColor="white">
          <Content paddingSides="xl" paddingBottom="xxl" align="center">
            <Text as="h2" bold paddingTop="xxl" paddingBottom="xl">
              LINEUP
            </Text>
            <Bands as="img" src="/budchella-bands.svg" />
          </Content>
        </SectionOne>
        <Container
          ref={sectionTwoRef}
          fontColor="white"
          grid
          colSpacing="l"
          m={{ cols: "1fr" }}
          l={{ cols: "1fr 1fr" }}
        >
          <Container centerContent>
            <img src="/venue.jpg" />
          </Container>
          <VenueContent
            m={{ paddingSides: "l", paddingTop: "xl", paddingBottom: "xxl" }}
            l={{
              paddingSides: "0",
              paddingEnds: "xl"
            }}
          >
            <Text as="h2" bold paddingBottom="l">
              VENUE
            </Text>
            <Text as="p" paddingBottom="xl" maxWidth={350}>
              Tucked away in Index Washington is the ultimate backdrop for the
              sonic utopia that is Budchella. Soak in the hot tub during the day
              and vibe in total bliss in the night at America's best
              undiscovered music and arts festival.
            </Text>
            <LearnMoreButton
              as="a"
              button
              buttonSizeMedium
              buttonPill
              bgColor={theme.colors.yellow}
              href="https://www.vrbo.com/1694337"
              target="_blank"
            >
              See Details
            </LearnMoreButton>
          </VenueContent>
        </Container>
        <Container
          bgColor="black"
          grid
          colSpacing="l"
          m={{ cols: "1fr" }}
          l={{ cols: "300px 1fr" }}
        >
          <Container centerContent m={{ gridRow: 2 }} l={{ gridRow: "unset" }}>
            <Container
              as="iframe"
              src="https://open.spotify.com/embed/playlist/3FwMEVemebq2pQy4f5y4k7"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </Container>
          <Container
            centerContent
            bgColor="yellow"
            m={{ paddingSides: "l", paddingEnds: "l" }}
            l={{ paddingSides: "0", paddingEnds: "0" }}
          >
            <Container align="center">
              <Text
                as="h3"
                bold
                m={{ paddingBottom: "m" }}
                l={{ paddingBottom: "0" }}
              >
                Official Budchella Playlist
              </Text>
              <Text as="p">just puttin out those vibes.</Text>
            </Container>
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default withTheme(Home);
