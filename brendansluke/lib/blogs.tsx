import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "blogs");

export interface Blog {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

export function getSortedBlogsData(): Blog[] {
  // Get file names under /blogs
  const fileNames = fs.readdirSync(blogsDirectory);
  const allblogsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the blog metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const blog: Blog = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml: "", // ATM I don't care about contentHtml here
    };

    return blog;
  });

  // TODO:  Sort blogs by date
  return allblogsData;
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getBlogData(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the blog metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  const blog: Blog = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blog;
}
