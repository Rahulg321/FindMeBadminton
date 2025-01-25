import { Text, View } from "react-native";
import { Link } from 'expo-router';


export default function Index() {
    return (
        <View className="p-6 border-4 border-gray-400 bg-slate-100 rounded-xl shadow-lg h-full">
            <Text className="text-red-500 text-3xl font-bold mb-4">
                Is this real?
            </Text>

            <View className="space-y-3">
                <Link href="/details">
                    <Text className="text-blue-600 text-lg underline">
                        Go to Details
                    </Text>
                </Link>
            </View>
        </View>
    );
}
