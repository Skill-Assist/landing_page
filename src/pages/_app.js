import { ContactModalCtxProvider } from "@/context/moda-context";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <ContactModalCtxProvider>
      <Component {...pageProps} />
    </ContactModalCtxProvider>
  );
}
