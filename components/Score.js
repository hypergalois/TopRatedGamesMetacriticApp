import { View, Text, StyleSheet } from "react-native";

function Score({ score, maxScore }) {
	function getColor() {
		const percentage = (score / maxScore) * 100;

		if (percentage > 75) {
			return styles.greenBackground;
		} else if (percentage > 50) {
			return styles.yellowBackground;
		} else {
			return styles.redBackground;
		}
	}

	const colorStyle = getColor();

	return (
		<View style={[styles.container, colorStyle]}>
			<Text style={styles.scoreText}>{score}</Text>
		</View>
	);
}

export default Score;

const styles = StyleSheet.create({
	container: {
		width: 64, // equivalente a w-16
		height: 64, // equivalente a h-16
		borderRadius: 32, // equivalente a rounded-full
		justifyContent: "center",
		alignItems: "center",
	},
	scoreText: {
		fontSize: 24, // equivalente a text-2xl
		fontWeight: "bold",
		color: "white", // equivalente a text-white
	},
	greenBackground: {
		backgroundColor: "#22c55e", // bg-green-500
	},
	yellowBackground: {
		backgroundColor: "#eab308", // bg-yellow-500
	},
	redBackground: {
		backgroundColor: "#ef4444", // bg-red-500
	},
});
