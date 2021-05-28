import { ThemeProvider } from "next-themes"
import { DefaultSeo } from 'next-seo'
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DefaultSeo
        title="Framer motion list animation"
        description="Simple animation when reordering lists."
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
