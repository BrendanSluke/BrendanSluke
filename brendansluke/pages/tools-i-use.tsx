import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const ToolsIUse = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>Tools I Use</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Tools I Use</h2>
        <small className={utilStyles.lightText}>
          <p>
            A short list of tools that I use on a daily basis as a web
            developer.
          </p>
        </small>
        <ul className={utilStyles.list}>
          {/* Greenshot */}
          <li className={utilStyles.listItem}>
            <Link href="https://getgreenshot.org/">
              <a>Greenshot</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <p>
                Greenshot is an open source screenshot tool for Windows, it
                turns your print screen button into a swiss army knife for
                screenshots.
              </p>
              <p>
                I use this in place of the snipping tool that is included with
                Windows.
              </p>
            </small>
          </li>

          {/* ScreenToGif */}
          <li className={utilStyles.listItem}>
            <Link href="https://www.screentogif.com/">
              <a>ScreenToGif</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <p>
                ScreenToGif is another open source tool that allows you to
                easily screen record gifs.
              </p>
              <p>
                I find this tool to be useful for demonstrating a task,
                performing a demo, or communicating a bug.
              </p>
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default ToolsIUse;
