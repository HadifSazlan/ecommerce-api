
import {pgTable, serial, varchar, timestamp} from 'drizzle-orm/pg-core';

export const product = pgTable('product', {
    id: serial('id').primaryKey(),
    brand: varchar('brand', {length: 50}),
    name: varchar('name', {length: 50}),
    image: varchar('image', {length: 255}),
    price: varchar('price', {length: 20}),
    stock: varchar('stock', {length: 10}),
    created_at: timestamp('created_at', {precision: 6, withTimezone: true}).defaultNow(),
});