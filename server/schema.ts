import { text, pgTable, serial } from "drizzle-orm/pg-core";

export const users = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
});
