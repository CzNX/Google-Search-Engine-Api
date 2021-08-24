import Head from "next/head";
import Avatar from "../comps/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../comps/Footer";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  const ref = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = ref.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Head>
        <title>Google</title>
      </Head>
      {/* header */}
      <header className="flex  p-5 justify-between w-full text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link"> Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://yt3.ggpht.com/yti/APfAmoFqezjORcDBXJ65yLmhPd3bvjS1fsR4yA6QJqUXXg=s88-c-k-c0x00ffffff-no-rj-mo" />
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          height="100"
          width="300"
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200
        px-5 py-3 items-center
        sm:max-w-xl
        lg:max-w-2xl
        "
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="focus:outline-none flex-grow "
            ref={ref}
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button
            className="btn p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md"
            onClick={search}
          >
            Google Search
          </button>
          <button
            className="btn p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md"
            onClick={search}
          >
            I'm Feeling LuckyclassName
          </button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  );
}
