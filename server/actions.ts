"use server";

import { db } from "@/server";

export const readData = async () => {
  const todos = await db.query.todos.findMany();
  //   const isError = true;
  if (!todos) {
    return { error: "no todos found" };
  }
  return { success: todos };
};
