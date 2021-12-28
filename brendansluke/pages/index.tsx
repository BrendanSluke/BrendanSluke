import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedBlogsData } from "../lib/blogs";
import { Blog } from "../lib/blogs";
import Date from "../components/date";

export async function getStaticProps() {
  const blogs = getSortedBlogsData();
  return {
    props: {
      blogs,
    },
  };
}

interface HomeProps {
  blogs: Blog[];
  children: JSX.Element | JSX.Element[];
}

const HomePage = ({ blogs, children }: HomeProps) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I`'`m Brendan Sluke!</p>
        <p>
          Welcome to my personal site, I have recently moved my{" "}
          <a href="https://webdev.box33.net/blog">Web Development blog</a> off
          of my personal site.
        </p>
        <p>
          I'm hoping to write about more personal ideas and philosophies that
          aren't 100% about Software or{" "}
          <a href="https://webdev.box33.net/blog">Web Development</a>.
        </p>
        <p>
          A lot of my current web development projects live on{" "}
          <a href="https://box33.net">Box33.net</a>.
        </p>
        <p>
          The best place to contact me is by DM'ing me on{" "}
          <a href="https://www.twitter.com/BrendanSluke">Twitter</a> or sending
          me an email: contact[at]brendansluke.com.
        </p>
        <p>
          This site is built using <a href="https://nextjs.org">Next.js</a> and
          is deployed using{" "}
          <a href="https://pages.cloudflare.com">Cloudflare Pages</a>.
        </p>
        <p>
          This site is also open source, if you want to add something please{" "}
          <a href="https://github.com/BrendanSluke/BrendanSluke">
            open an issue on github
          </a>
          .
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {blogs.map((blog) => (
            <li className={utilStyles.listItem} key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={blog.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default HomePage;
