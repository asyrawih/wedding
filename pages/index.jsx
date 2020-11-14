import Head from "next/head";
import Layout from "../layouts/Layout";
export default function Home({ response }) {
  const { data } = response;

  return (
    <>
      <Head>
        <title>Wedding Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const request = await fetch("http://localhost:3000/api/category/");
  const response = await request.json();
  return {
    props: { response },
  };
}
