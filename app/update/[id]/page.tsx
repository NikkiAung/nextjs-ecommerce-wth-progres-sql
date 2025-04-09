import CustomButton from "@/components/custom-button";
import { updateData } from "@/server/actions";

type EditTodoProps = {
  params: {
    id: string;
  };
};

const EditTodo = ({ params }: EditTodoProps) => {
  return (
    <main>
      <h2>Update todo</h2>
      <form action={updateData}>
        <input type="text" name="id" value={params.id} hidden readOnly />
        <div className="flex gap-2">
          <input
            type="text"
            name="title"
            className="bg-transparent border border-white"
          />
          <CustomButton name="Update" />
        </div>
      </form>
    </main>
  );
};

export default EditTodo;
