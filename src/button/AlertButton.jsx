export default function AlertButton({ text, message }) {
  function handleClick(e) {
    console.log(e);
    alert(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}
