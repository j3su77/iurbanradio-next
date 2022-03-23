import { FC } from "react"
import Head from "next/head"

import { Navbar } from "../ui"
import RadioPlayer from "../radio/RadioPlayer"
import { SeletedTheme } from "./"
import { SideMenu } from "../ui"




interface Props {
    title: string,
    pageDescription: string,
    imageFullUrl?: string
}


export const MainLayout: FC<Props>= ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <SeletedTheme >
    <Head>
      <title>{ title }</title>
      <meta name="description" content={pageDescription} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={pageDescription} />
      {
        imageFullUrl && (
          <meta name="og:image" content={imageFullUrl} />
        )
      }
    </Head>

  
      <Navbar />
      <SideMenu />
      <RadioPlayer />

    <main style={{ margin: "80px auto", maxWidth: "1440px", padding: "0 30px" }}>
      {children}
    </main>


    <footer>

    </footer>
  
  </SeletedTheme>
  )
}
