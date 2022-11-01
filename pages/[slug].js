import styles from "../styles/Blog.module.css";
import fs from "fs";
import Link from "next/link";
import * as matter from "gray-matter";
import Post from "../components/Post";
import Header from "../components/Header";
import path from "path";

const PostPage = ({ data, content }) => (
  <>
    <Header home={false} />
    <main className={styles.main}>
      <Post data={data} content={content} />
      <Link href="/">
        <a className={styles.backButton}>&#8592; Back</a>
      </Link>
    </main>
  </>
);

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"), "utf8");
  const paths = files.map((article) => ({
    params: {
      slug: article.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = matter(
    fs.readFileSync(path.join("posts", `${slug}.mdx`), "utf-8")
  );
  const { data, content } = post;

  return {
    props: { data, content },
  };
}

export default PostPage;
