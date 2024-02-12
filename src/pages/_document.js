import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir='rtl' lang='fa'>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
