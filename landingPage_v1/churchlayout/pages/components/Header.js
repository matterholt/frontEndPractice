export default function Header() {
  return (
    <header>
      <p> Come to this church</p>
      <style jsx>
        {`
          header {
            width: 100%;
            background: lightgray;
            height: 100vh;
            display: grid;
            place-items: center;
          }
        `}
      </style>
    </header>
  );
}
