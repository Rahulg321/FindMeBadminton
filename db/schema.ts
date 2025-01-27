// src/db/schema.ts
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
firstName: text('first_name').notNull(),
  email: text('email').notNull().unique(),
});


export const tasks = sqliteTable("tasks", {
    id:integer("id").primaryKey({autoIncrement:true}),
    name:text("name").notNull(),
    listId:integer("list_id").notNull().references(()=>lists.id)
})

export const lists = sqliteTable("lists", {
    id:integer("id").primaryKey({autoIncrement:true}),
    name:text("name").notNull(),
})


export type User = typeof users.$inferSelect
export type Task = typeof tasks.$inferSelect
export type List = typeof lists.$inferSelect
