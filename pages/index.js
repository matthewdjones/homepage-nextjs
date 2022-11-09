import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Designer & Developer</h2>
        <p>
          I like to find new problems and new solutions. Always striving for
          simplicity.
        </p>
      </section>
    </Layout>
  );
}
