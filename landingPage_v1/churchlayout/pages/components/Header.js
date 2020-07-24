export default function Header() {
  return (
    <header>
      <img
        className="full_image"
        src="../simple_image_lg.png"
        alt="some random image"
      />
      <style jsx>
        {`
          header {
            width: 100%;
            background: lightgray;
            display: grid;
            place-items: center;
          }
        `}
      </style>
    </header>
  );
}
