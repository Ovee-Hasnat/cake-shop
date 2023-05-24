import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="overflow-x-hidden scroll-smooth scrollbar scrollbar-track-white scrollbar-thumb-fuchsia-950/50 hover:scrollbar-thumb-fuchsia-950/80 scrollbar-thumb-rounded-lg scrollbar-w-2"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
