
import {db} from '../../config/db.js';
import {product} from '../../db/schema/product.js';
import {eq} from 'drizzle-orm';

const findAllProducts = async () => {
    return db.select().from(product);
};

const addProduct = async (data) => {
    return db.insert(product).values(data).returning();
};

const findOneProduct = async (id) => {
    return db.select().from(product).where(eq(product.id, id));
};

const updateProduct = async (data, id) => {
    return db.update(product).set(data).where(eq(product.id, id)).returning();
};

const deleteProduct = async (id) => {
    return db.delete(product).where(eq(product.id, id)).returning();
}

export {findAllProducts, addProduct, findOneProduct, updateProduct, deleteProduct};