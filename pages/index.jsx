import Head from "next/head";
import Layout from "../layouts/Layout";
import ContactPerson from "../layouts/Section/ContactPerson";
import Features from "../layouts/Section/Features";
import Piercing from "../layouts/Section/Piercing";

export default function Home({ response }) {
  return (
    <>
      <Head>
        <title>Wedding Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Features />
        <Piercing />
        <ContactPerson />
      </Layout>
    </>
  );
}
