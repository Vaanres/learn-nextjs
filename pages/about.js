import Link from "next/link";
import Meta from "../components/Meta";

function about() {
  return (
    <>
      <Meta title="About Us" />
      <h1>About us</h1>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </>
  );
}

export default about;
