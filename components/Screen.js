import { View, StyleSheet } from "react-native";

function Screen({ children, ...props }) {
	return (
		<View style={styles.container} {...props}>
			{children}
		</View>
	);
}

export default Screen;

const styles = StyleSheet.create({
	container: {
		flex: 1, // equivalente a flex-1
		backgroundColor: "#1a202c", // bg-gray-900
		paddingTop: 8, // pt-2
		paddingHorizontal: 8, // px-2
	},
});
