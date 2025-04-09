import { CreateData, readData } from "@/server/actions";
import CustomButton from "@/components/custom-button";

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
      <form action={CreateData} className="flex gap-1">
        <input
          type="text"
          name="todoTitle"
          className="bg-transparent border border-white"
        />
        <CustomButton />
      </form>
    </div>
  );
}
