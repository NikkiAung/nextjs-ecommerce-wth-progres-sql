"use server";

import { db } from "@/server";
import { todos } from "@/server/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const readData = async () => {
  const todos = await db.query.todos.findMany();
  //   const isError = true;
  if (!todos) {
    return { error: "no todos found" };
  }
  return { success: todos };
};

export const CreateData = async (formData: FormData) => {
  const toDoTitle = formData.get("todoTitle")?.toString();
  if (!toDoTitle) {
    return { error: "no todos found" };
  }
  await db.insert(todos).values({ title: toDoTitle });
  revalidatePath("/");
  return { success: "To do created" };
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
