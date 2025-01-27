// src/seed.ts
import { users, lists, tasks } from './schema';
import { faker } from '@faker-js/faker';
import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite';

import AsyncStorage from "expo-sqlite/kv-store"

export async function addDummyData(db :ExpoSQLiteDatabase) {

    const value = AsyncStorage.getItemSync("db Initialized")

    console.log(value)
    if(value) return


        console.log('Seeding lists...');
        await db.insert(lists).values([{name:"List 1"}, {name:"List 2"}])

    console.log('Seeding tasks...');
    await db.insert(tasks).values([
        {name:"Task 1", listId:1},
        {name:"Task 2", listId:1},
        {name:"Task 3", listId:2},
    ])



  console.log('Seeding completed.');
  AsyncStorage.setItemSync("db Initialized", "true")
}
