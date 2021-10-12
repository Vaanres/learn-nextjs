import styles from "../styles/ArticleItem.module.scss";
import Link from "next/link";

function ArticleItem({ article }) {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={styles.card}>
        <h2>{article.title} →</h2>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
}

export default ArticleItem;
