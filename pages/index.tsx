import Layout from "components/layout/Layout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <div>test</div>
      </Layout>
    </div>
  );
};

export default Home;
