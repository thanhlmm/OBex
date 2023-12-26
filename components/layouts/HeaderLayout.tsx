import Head from "next/head";
import { FC, ReactNode } from "react";
import Image from "next/image";
import Header from "../common/Header";

type HeaderLayoutProps = {
  title?: string;
  children: ReactNode;
};
export const HeaderLayout: FC<HeaderLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - OpenBook Explorer` : `OpenBook Explorer`}
        </title>
      </Head>
      <div className="flex flex-col justify-between w-full h-screen space-y-4 overflow-y-auto">
        <div className="w-full mx-auto">
          <Header />
          <div className="max-w-4xl px-4 py-10 mx-auto space-y-6">
            {children}
          </div>
        </div>
        {/* <div className="flex items-center justify-center pb-4">
          <a
            href="https://github.com/TheDeFiQuant/OBex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-light no-underline rounded-sm hover:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:border-none"
          >
            <Image
              src="/github.svg"
              width={24}
              height={24}
              alt="Github"
              className="cursor-pointer"
            />
            <p>Source Code</p>
          </a>
        </div> */}
      </div>
    </>
  );
};

export const getHeaderLayout = (page: React.ReactNode, title?: string) => (
  <HeaderLayout title={title}>{page}</HeaderLayout>
);
