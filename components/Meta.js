import Head from "next/head";

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Vaanres Home Page",
  keywords: "ux design, portofolio",
  description: "description",
};

export default Meta;
