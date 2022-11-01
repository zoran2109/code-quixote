import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { getDate, sortPostsByDate } from "../utils/functions";

const PostList = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {sortPostsByDate(posts).map((post) => (
        <Link href={`${post.slug}`} key={post.slug}>
          <a className={styles.card}>
            <h3>{post.frontMatter.title}</h3>
            <p className={styles.date}>
              {getDate(post.frontMatter.publishedAt)}
            </p>
            <p className={styles.cardDescription}>
              {post.frontMatter.description}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
