export default function TaskList({ items = [] }) {
  return (
    <div>
      <h1>List Task</h1>
      <ul>
        {items.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </div>
  );
}
