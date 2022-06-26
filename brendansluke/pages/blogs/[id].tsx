import Layout from "../../components/layout";
import Head from "next/head";
import { Blog, getAllBlogIds, getBlogData } from "../../lib/blogs";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps } from "next/types";

export const getStaticProps: GetStaticProps = async (context) => {
  const blogData = await getBlogData(context.params?.id as string);
  return {
    props: {
      blogData,
    },
  };
};

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

interface BlogProps {
  blogData: Blog;
}

export default function BlogPage({ blogData }: BlogProps) {
  return (
    <Layout home>
      {/* Add this <Head> tag */}
      <Head>
        <title>{blogData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{blogData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={blogData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </article>
    </Layout>
  );
}
