import Head from "next/head"
import { FC } from "react"
import RadioPlayer from "../radio/RadioPlayer"
import { Navbar } from "../ui"
import { SeletedTheme } from "./SeletedTheme"




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
  
      <RadioPlayer />

    <main style={{ margin: "80px auto", maxWidth: "1440px", padding: "0 30px" }}>
      {children}
    </main>


    <footer>

    </footer>
  
  </SeletedTheme>
  )
}
