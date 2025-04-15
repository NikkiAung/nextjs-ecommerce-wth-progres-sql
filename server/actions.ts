"use server";

import { db } from "@/server";
import { posts, todos } from "@/server/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type PostResponse =
  | { success: string; error?: undefined }
  | { error: string; success?: undefined };

export const getPosts = async () => {
  const posts = await db.query.posts.findMany();
  //   const isError = true;
  if (!posts) {
    return { error: "no todos found" };
  }
  return { success: posts };
};

export const CreatePost = async (formData: FormData): Promise<PostResponse> => {
  console.log(formData);
  const title = formData.get("todoTitle")?.toString();
  const description = formData.get("description")?.toString();
  if (!title || !description) {
    return { error: "Invalid data format" };
  }
  await db.insert(posts).values({ title, description });
  revalidatePath("/");
  redirect("/");
};

export const deleteData = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  console.log(id);
  if (!id) {
    return { error: "no todos found" };
  }
  await db.delete(todos).where(eq(todos.id, id));
  revalidatePath("/");
  return { success: "To do deleted" };
};

export const updateData = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  const title = formData.get("title")?.toString();

  await db.update(todos).set({ title: title }).where(eq(todos.id, id));
  revalidatePath("/");
  redirect("/");
};
