import { CreateData, readData, deleteData } from "@/server/actions";
import CustomButton from "@/components/custom-button";
import Link from "next/link";

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
            <input type="text" name="id" value={todo.id} hidden readOnly />
            <div className="flex gap-1 my-2 items-center">
              <p>{todo.title}</p>
              <CustomButton name="Delete" />
              <Link
                href={`update/${todo.id}`}
                className="text-green-600 p-1 rounded-lg bg-white pl-3 pr-3"
              >
                Edit
              </Link>
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
        <CustomButton name="Add item" />
      </form>
    </div>
  );
}
