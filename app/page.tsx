import { CreateData, readData, deleteData } from "@/server/actions";
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
        <div key={todo.id}>
          <form action={deleteData}>
            <input type="text" name="id" value={todo.id} hidden />
            <div className="flex gap-1 my-2">
              <p>{todo.title}</p>
              <button className="p-1 rounded-lg bg-red-500">Delete</button>
            </div>
          </form>
        </div>
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
