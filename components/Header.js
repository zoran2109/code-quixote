import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Header = ({ home = true }) => (
  <header className={styles.header}>
    <h1>
      <Link href="/">
        <a className={home ? styles.headerLink : styles.headerLinkPost}>
          Code Quixote
        </a>
      </Link>
    </h1>
    {home && (
      <div>
        <p className={styles.headerSubtitle}>
          Humanist&apos;s wanderings in the land of software development{" "}
        </p>
        <Link href="/about-this-blog">
          <a className={styles.info}>
            <span className={styles.computerEmoji}>{"\u{1F4BB}"}</span>
            <span className={styles.infoEmoji}>{"\u{2139}"}</span>
          </a>
        </Link>
      </div>
    )}
  </header>
);

export default Header;
