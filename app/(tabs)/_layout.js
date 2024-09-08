import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { InfoIcon, HomeIcon } from "../../components/Icons";

function Layout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					backgroundColor: "#000",
					borderTopColor: "#000",
				},
				tabBarActiveTintColor: "#fff",
				tabBarInactiveTintColor: "#888",
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <HomeIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: "About",
					tabBarIcon: ({ color }) => <InfoIcon color={color} />,
				}}
			/>
		</Tabs>
	);
}

export default Layout;
