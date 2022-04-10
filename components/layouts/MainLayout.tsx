import { FC } from "react";
import Head from "next/head";

import { Footer, Navbar } from "../ui";
import { SideMenu } from "../ui";


interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const MainLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <Navbar />
      <SideMenu />
      {/* <RadioPlayer />  */}

      <main style={{ margin: "10px auto", maxWidth: "1200px" }}>
        {children}
      </main>

      <Footer />
    </>
  );
};
