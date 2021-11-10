import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            rel="preload"
            href="/fonts/Satoshi-Variable.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        </Head>
        <body className="overflow-hidden text-black bg-white dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
