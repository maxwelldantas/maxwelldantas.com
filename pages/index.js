import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <Layout home>
      <Script
        async
        id="adsbygoogle"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8020244450425935"
        crossOrigin="anonymous"
      />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Sejam bem-vindos(as). Atuo como desenvoldedor de software Back-End.
          Entre em contato comigo pelo{" "}
          <a href="https://www.linkedin.com/in/maxwelldantas" target="_blank">
            LinkedIn
          </a>{" "}
          e os repositórios com meus projetos se encontram no{" "}
          <a href="https://github.com/maxwelldantas" target="_blank">
            GitHub
          </a>
          <span>.</span>
        </p>
        <p>
          Acesse{" "}
          <a href="https://maxwelldantas.com/cv" target="_blank">
            aqui
          </a>{" "}
          meu CV.
        </p>
      </section>
    </Layout>
  );
}
