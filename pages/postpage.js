import Link from "next/link";
import Meta from "../components/Meta";
import { getSortedPostsData } from "../library/posts";

function postpage({ allPostsData }) {
  return (
    <>
      <section className="bg-gray">
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default postpage;
