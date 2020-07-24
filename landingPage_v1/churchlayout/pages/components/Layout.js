import Head from "next/head";
import TopNavBar from "./TopNavBar";

export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavBar />

      <main>{props.children}</main>
      <style jsx>
        {`
          .container {
            overflow: hidden;
          }
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
