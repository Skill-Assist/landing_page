import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Skill Assist</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Skill Assist landing page, for users who intend to test for companies or for companies who want to apply tests to potential candidates"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
