export default function SearchForm() {
  return (
    <form>
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("You click search");
        }}
      >
        Search
      </button>
    </form>
  );
}
