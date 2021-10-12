import styles from "../styles/ArticleList.module.scss";
import ArticleItem from "./ArticleItem";
function ArticleList({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((post, index) => (
        <ArticleItem key={index} article={post} />
      ))}
    </div>
  );
}

export default ArticleList;
