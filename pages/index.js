import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I'm Dhruv. I'm a Full Stack Developer at Protonshub
          Technologies. I'm currently working on a Next.js projects using JS and
          TS.
        </p>
        <h1 className="title">
          Read{" "}
          <Link href="/posts/first-post">
            <a>my first Blog!</a>
          </Link>
        </h1>
      </section>
    </Layout>
  );
}
