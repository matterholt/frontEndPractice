import Layout from "./components/Layout";
import Header from "./components/Header";

function ContentContainer(props) {
  return (
    <div id="testing" className="content_container">
      <h1>TESTINGS</h1>
      <style jsx>
        {`
          .content_container {
            display: grid;
            place-items: center;
            font-size: 4rem;
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <Header />
      <ContentContainer />
    </Layout>
  );
}
