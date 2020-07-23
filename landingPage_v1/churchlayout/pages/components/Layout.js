import Head from "next/head";
import TopNavBar from "./TopNavBar";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavBar />
      <Header />

      <main>{props.children}</main>
      <style jsx>
        {`
          main {
            display: flex;
            flex-flow: column;
            width: 100vw;
          }
        `}
      </style>
    </div>
  );
}
