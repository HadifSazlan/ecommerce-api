
import {db} from '../../config/db.js';
import {user} from '../../db/schema/user.js';
import {eq} from 'drizzle-orm';

const findAllUsers = async () => {
    return db.select().from(user);
};

const addUser = async (data) => {
    return db.insert(user).values(data).returning();
};

const findOneUser = async (id) => {
    return db.select().from(user).where(eq(user.id, id));
};

const updateUser = async (data, id) => {
    return db.update(user).set(data).where(eq(user.id, id)).returning();
};

const deleteUser = async (id) => {
    return db.delete(user).where(eq(user.id, id)).returning();
}

export {findAllUsers, addUser, findOneUser, updateUser, deleteUser};