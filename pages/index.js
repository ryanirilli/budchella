import React from "react";
import Head from "next/head";
import { E } from "../design-system";
import { useInView } from "react-intersection-observer";

const Container = React.forwardRef((p, ref) => <E {...p} ref={ref} />);
const Content = React.forwardRef((p, ref) => <E {...p} ref={ref} />);
const THRESHOLD = [0.5];
const Home = () => {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
    triggerOnce: true
  });

  return (
    <>
      <Head>
        <title>Budchella Music and Arts Frestival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fullPage centerContent bgImage="./background.jpg">
        <Content m={{ paddingSides: "m" }} l={{ paddingSides: "l" }}></Content>
      </Container>
      <Container ref={ref} fullPage bgColor={inView ? "blue" : "yellow"} />
      <Container fullPage bgColor="red" />
    </>
  );
};

export default Home;
