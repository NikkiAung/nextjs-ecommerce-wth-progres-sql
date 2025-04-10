import CustomButton from "@/components/custom-button";
import { CreatePost } from "@/server/actions";

const CreateForm = () => {
  return (
    <form action={CreatePost}>
      <h2 className="text-title">Create new post</h2>
      <div className="my-3 flex flex-col gap-2 w-fit">
        <input
          type="text"
          name="todoTitle"
          placeholder="title ..."
          className="bg-transparent border border-blue-400 rounded-lg p-2 outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
        />
        <input
          type="text"
          name="description"
          placeholder="description ..."
          className="block bg-transparent border border-blue-400 rounded-lg p-2 outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      <CustomButton name="Create" />
    </form>
  );
};

export default CreateForm;
