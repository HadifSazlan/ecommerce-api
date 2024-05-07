
import {pgTable, serial, varchar, timestamp} from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 50}),
    username: varchar('username', {length: 50}).unique().notNull(),
    password: varchar('password', {length: 64}).notNull(),
    email: varchar ('email', {length: 50}),
    phone: varchar('phone', {length: 20}),
    created_at: timestamp('created_at', {precision: 6, withTimezone: true}).defaultNow(),
});