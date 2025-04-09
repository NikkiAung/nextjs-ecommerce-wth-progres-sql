import { readData } from "@/server/actions";

export default async function Home() {
  const { error, success } = await readData();
  if (error) {
    throw new Error(error);
  }
  console.log(success);

  return (
    <div>
      <h1 className="text-2xl font-bold">Todos</h1>
      {success?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
