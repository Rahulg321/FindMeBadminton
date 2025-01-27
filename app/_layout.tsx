import { Stack } from 'expo-router';
import React from 'react';

import "../global.css"
import { ActivityIndicator } from 'react-native';
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite"
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "@/drizzle/migrations";
import { addDummyData } from '@/db/addDummyData';


export const DATABASE_NAME = "db.db"

export default function RootLayout() {

    const expoDb = openDatabaseSync(DATABASE_NAME)
    const db = drizzle(expoDb)

    const { success, error } = useMigrations(db, migrations);

    console.log("success", success)
    console.log("error", error)

    React.useEffect(() => {
        if (success) {
            console.log("Migration success")
            addDummyData(db)
        }

        console.log("error", error)
    }, [success])


    return (
        <React.Suspense fallback={
            <>
                <ActivityIndicator size="large" color="#0000ff" />
                <ActivityIndicator size="large" color="#0000ff" />
            </>
        }>
            {/* we want to use live queries so enableChangeListener */}
            <SQLiteProvider databaseName={DATABASE_NAME} options={{ enableChangeListener: true }} useSuspense>

                <Stack>
                    <Stack.Screen name="(tabs)" options={{
                        headerShown: false,
                    }} />
                </Stack>
            </SQLiteProvider>
        </React.Suspense>
    );
}
