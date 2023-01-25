import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>MyTemplate</title>
      </Head>

      <header className="p-2 text-white bg-slate-600">
        <div className="flex flex-row justify-start items-center gap-x-4 text-2xl">
          <h1 className="flex-1">Next.js Amplify Sample</h1>
          <button className="bg-slate-800 p-2 text-xl rounded">
            <Link href={"/"}>SSG</Link>
          </button>
          <button className="bg-slate-800 p-2 text-xl rounded">
            <Link href={"/ssr"}>SSR</Link>
          </button>
        </div>
      </header>

      <div className="content">{children}</div>

      <footer className=""></footer>
    </div>
  );
};
export default Layout;
