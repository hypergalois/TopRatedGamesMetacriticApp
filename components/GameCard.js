import { useEffect, useRef } from "react";
import {
	Text,
	View,
	Image,
	Animated,
	Pressable,
	StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import Score from "./Score"; // Importa tu componente Score

function GameCard({ game }) {
	return (
		<View style={styles.cardContainer}>
			<Image source={{ uri: game.image }} style={styles.gameImage} />
			<View style={styles.cardContent}>
				<Text style={styles.gameTitle}>{game.title}</Text>
				<Text style={styles.gameDescription}>
					{game.description.slice(0, 200)}...
				</Text>
				<View style={styles.cardFooter}>
					<Score score={game.score} maxScore={100} />
					<Text style={styles.releaseDate}>{game.releaseDate}</Text>
				</View>
			</View>
		</View>
	);
}

function LinkedGameCard({ game }) {
	return (
		<Link asChild href={`/game/${game.slug}`}>
			<Pressable>
				<GameCard game={game} />
			</Pressable>
		</Link>
	);
}

function AnimatedGameCard({ game, index }) {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 1000,
			delay: index * 100,
			useNativeDriver: true,
		}).start();
	}, [opacity, index]);

	return (
		<Animated.View style={{ opacity }}>
			<LinkedGameCard game={game} />
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
		marginBottom: 16,
		overflow: "hidden",
	},
	gameImage: {
		width: "100%",
		height: 192, // equivalente a h-48
		resizeMode: "cover",
	},
	cardContent: {
		padding: 16, // equivalente a p-4
	},
	gameTitle: {
		fontSize: 20, // equivalente a text-xl
		fontWeight: "800", // equivalente a font-extrabold
		color: "#1a1a1a", // equivalente a text-gray-900
		marginBottom: 8, // equivalente a mb-2
	},
	gameDescription: {
		fontSize: 14, // equivalente a text-sm
		color: "#4a4a4a", // equivalente a text-gray-600
		marginBottom: 12, // equivalente a mb-3
	},
	cardFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 12, // equivalente a mt-3
	},
	releaseDate: {
		fontSize: 18, // equivalente a text-lg
		color: "#6b7280", // equivalente a text-gray-500
	},
});

export default AnimatedGameCard;
