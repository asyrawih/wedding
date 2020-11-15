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
          <div className="section-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita, iure alias culpa consectetur pariatur incidunt! Quae, aut. Laboriosam esse maxime reprehenderit autem quo, illum soluta rem beatae quia et.
          </div>
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
