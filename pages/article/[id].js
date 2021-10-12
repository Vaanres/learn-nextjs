import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../config";
import Meta from "../../components/Meta";

function articlePage({ theArticle }) {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={theArticle.title} />
      <div>
        <h1> {theArticle.title}</h1>
        <p>{theArticle.body}</p>
        <br />
        <Link href="/">⬅ Back</Link>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const fetchPost = await fetch(`${server}/api/articles/${context.params.id}`);
  const theArticle = await fetchPost.json();

  return {
    props: { theArticle },
  };
}

export async function getStaticPaths() {
  const fetchPost = await fetch(`${server}/api/articles`);

  const articles = await fetchPost.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

// export async function getStaticProps(context) {
//   const fetchPost = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const theArticle = await fetchPost.json();

//   return {
//     props: { theArticle },
//   };
// }

// export async function getStaticPaths() {
//   const fetchPost = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//   const articles = await fetchPost.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({
//     params: { id: id.toString() },
//   }));

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export async function getServerSideProps(context) {
//   const fetchPost = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const theArticle = await fetchPost.json();

//   return {
//     props: { theArticle },
//   };
// }

export default articlePage;
