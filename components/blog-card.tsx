type BlogPropsType = {
  id: number;
  title: string;
};

import { CreatePost, getPosts, deleteData } from "@/server/actions";
import CustomButton from "@/components/custom-button";
import Link from "next/link";

const BlogCard = ({ id, title }: BlogPropsType) => {
  return (
    <form action={deleteData}>
      <input type="text" name="id" value={id} hidden readOnly />
      <div className="flex gap-1 my-2 items-center">
        <p>{title}</p>
        <CustomButton name="Delete" />
        <Link
          href={`update/${id}`}
          className="text-green-600 p-1 rounded-lg bg-white pl-3 pr-3"
        >
          Edit
        </Link>
      </div>
    </form>
  );
};

export default BlogCard;
