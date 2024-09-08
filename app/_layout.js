import { View, Pressable, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

import Logo from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

function Layout() {
	return (
		<View style={styles.container}>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: "black",
					},
					headerTintColor: "white",
					headerTitle: "",
					headerLeft: () => (
						<View style={styles.headerLeft}>
							<Logo />
						</View>
					),
					headerRight: () => (
						<View style={styles.headerRight}>
							<Link asChild href="/about">
								<Pressable>
									<CircleInfoIcon />
								</Pressable>
							</Link>
						</View>
					),
				}}
			/>
		</View>
	);
}

export default Layout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerLeft: {
		marginLeft: 16, // Añade margen al logo desde la izquierda
	},
	headerRight: {
		marginRight: 16, // Añade margen al icono desde la derecha
	},
});
