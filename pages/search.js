import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Header from "../comps/Header";
import SearchResults from "../comps/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import resp from "../resp";

const search = ({ results }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term}-Google Search</title>
      </Head>

      {/* header */}
      <Header />

      {/* searhc rsults */}
      {console.log(results)}
      <SearchResults results={results} />
    </div>
  );
};

export default search;

export const getServerSideProps = async (ctx) => {
  const useDummyData = false;
  const startIndex = ctx.query.start || "0";

  const data = useDummyData
    ? resp
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${ctx.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  // pass to client after sevrer has rendered

  return {
    props: {
      results: data,
    },
  };
};
