import styles from "../styles/Blog.module.css";
import PostList from "../components/PostList";
import Header from "../components/Header";
import * as matter from "gray-matter";
import fs from "fs";
import path from "path";

const Blog = ({ posts }) => (
  <>
    <Header />
    <main className={styles.main}>
      <PostList posts={posts} />
    </main>
  </>
);

export async function getStaticProps(context) {
  // Get filenames of all the posts
  const postFiles = fs.readdirSync(path.join("posts"), "utf8");

  // Get slug and frontmatter of all the posts
  const posts = postFiles.map((post) => {
    // Crate slug by removing extension of post file
    const slug = post.replace(".mdx", "");

    // Get frontmatter from post file
    const { data: frontMatter } = matter(
      fs.readFileSync(path.join("posts", post), "utf-8")
    );

    return {
      frontMatter,
      slug,
    };
  });

  return {
    props: { posts },
  };
}

export default Blog;
