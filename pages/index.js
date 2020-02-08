import React from "react";
import Head from "next/head";
import { E } from "../design-system";

const Container = p => <E {...p} />;
const Content = p => <E {...p} />;

const Home = () => {
  return (
    <>
      <Head>
        <title>Ryan Irilli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fullPage centerContent>
        <Content>budchella</Content>
      </Container>
    </>
  );
};

export default Home;
