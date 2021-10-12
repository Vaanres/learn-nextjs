import Link from "next/link";
import Image from "next/image";
import ArticleList from "../components/ArticleList";
import { server } from "../config";
import profilePicture from "../public/images/profile.png";
import utilStyles from "../styles/utils.module.scss";
import Alert from "../components/alert";
// import Tailwindcard from "../components/tailwindcard";

export default function Home({ articles }) {
  return (
    <div>
      <h1>Home</h1>
      <div className="bg-gray-100">haha</div>
      <Alert type="success">This is a warning</Alert>
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <Image
          class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={profilePicture}
          alt="Your Name"
          width={30}
          height={30}
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              Tailwind CSS is the only framework that I have seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">Sarah Dayan</div>
            <div className="text-gray-500">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>

      <div>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const fetchPosts = await fetch(`${server}/api/articles`);
  const articles = await fetchPosts.json();

  return {
    props: { articles }, // will be passed to the page component as props
  };
}

// export async function getStaticProps(context) {
//   // const ff = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
//   //   .then((response) => response.json())
//   //   .then((json) => console.log(json));

//   const fetchPosts = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );

//   const articles = await fetchPosts.json();

//   return {
//     props: { articles }, // will be passed to the page component as props
//   };
// }
