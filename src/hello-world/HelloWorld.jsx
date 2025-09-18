import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Hello World from Spread Syntax",
  };
  return (
    <>
      <HeaderHelloWorld {...props} />
      <ParaghaphHelloWorld />
    </>
  );
}

function HeaderHelloWorld({ text = "Ups, lupa kasih teks" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParaghaphHelloWorld() {
  const text = "Selamat Belajar React";
  return <p className="content">{text.toLowerCase()}</p>;
}
