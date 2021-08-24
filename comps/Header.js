import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const ref = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = ref.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          height="40"
          width="120"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form
          className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl px-6 py-1 md:py-3 ml-4 md:ml-10 mr-5 flex-grow"
          onSubmit={search}
        >
          <input
            className="flex-grow w-full  focus:outline-none"
            type="text"
            ref={ref}
          />
          <XIcon
            className="h-7 cursor-pointer transition duration-100 transform hover:scale-125 text-gray-500 sm:mr-3"
            onClick={() => (ref.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
        </form>
        <Avatar
          className="ml-auto"
          url="https://yt3.ggpht.com/yti/APfAmoFqezjORcDBXJ65yLmhPd3bvjS1fsR4yA6QJqUXXg=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
      {/* header options */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
