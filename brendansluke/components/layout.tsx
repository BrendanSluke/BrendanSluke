import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Script from "next/script";
import { Header } from "./header";

const name = "Brendan Sluke";
export const siteTitle = "Brendan Sluke";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hi, I'm Brendan Sluke and I love writing code and blogging about software engineering."
        />

        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Google Analytics */}
      <Script
        id="GATagManager"
        src="https://www.googletagmanager.com/gtag/js?id=G-6L85PJ4Q09"
        strategy="afterInteractive"
      ></Script>
      <Script
        id="GARawScript"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6L85PJ4Q09');
          `,
        }}
      ></Script>

      <Header home={home} name={name}></Header>
      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
