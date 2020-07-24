import Layout from "./components/Layout";
import Header from "./components/Header";

const Cards = (props) => {
  return (
    <div className="card">
      {props.children}
      <style jsx>{`
        .card {
          background-color: gray;
          flex: 0 1 300px;
          margin: 5px;
          height: 450px;
        }
      `}</style>
    </div>
  );
};

function ContentContainer(props) {
  return (
    <div id="testing" className="content_container">
      <h1>TESTINGS</h1>
      <div className="card_container">
        <Cards>
          <h2>Event One</h2>
          <p>show up for this</p>
        </Cards>
        <Cards>
          <h2>Event One</h2>
          <p>show up for this</p>
        </Cards>
        <Cards>
          <h2>Event One</h2>
          <p>show up for this</p>
        </Cards>
      </div>

      <style jsx>
        {`
          h1 {
            margin: 10px;
          }
          .content_container {
            text-align: center;
            font-size: 1rem;
            min-height: 100vh;
          }
          .card_container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
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
