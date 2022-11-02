import { useEffect } from "react";
import styles from "../styles/Blog.module.css";
import { marked } from "marked";
import { getDate } from "../utils/functions";
import Prism from "prismjs";

const Post = ({ data, content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <article className={styles.postMain}>
      <h2 className={styles.title}>{data.title.replace(/^.*:/, "")}</h2>
      <div>{getDate(data.publishedAt)}</div>

      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </article>
  );
};

export default Post;
