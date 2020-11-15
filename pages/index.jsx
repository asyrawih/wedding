import Head from "next/head";
import Layout from "../layouts/Layout";
import Features from "../layouts/Section-1/Features";

export default function Home({ response }) {
  return (
    <>
      <Head>
        <title>Wedding Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <div className="section-1">
            <Features />
          </div>
      </Layout>
    </>
  );
}