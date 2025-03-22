import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import HomePage from "@/components/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ojuolape&#39;s Portfolio </title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
