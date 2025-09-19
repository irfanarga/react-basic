import Todo from "./Todo.jsx";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
      isDeleted: true,
    },
    {
      id: 1,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn JavaScript",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn React",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Learn ReactJS Router",
      isCompleted: false,
    },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
