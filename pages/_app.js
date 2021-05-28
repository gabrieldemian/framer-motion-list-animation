import { ThemeProvider } from "next-themes"
import { DefaultSeo } from 'next-seo'
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DefaultSeo
        title="Playground"
        description="My playground to test new things."
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
