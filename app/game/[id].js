import {
	View,
	Text,
	ActivityIndicator,
	ScrollView,
	Image,
	StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams, Stack } from "expo-router";

import Screen from "../../components/Screen";
import Score from "../../components/Score";

import { getGameDetails } from "../../lib/metacritic";

function Detail() {
	const { id } = useLocalSearchParams();
	const [gameInfo, setGameInfo] = useState(null);

	useEffect(() => {
		getGameDetails(id).then(setGameInfo);
	}, [id]);

	return (
		<Screen>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: "#febb3e",
					},
					headerTintColor: "black",
					headerTitle: gameInfo ? gameInfo.title : "Loading...",
					headerLeft: () => null,
					headerRight: () => null,
				}}
			/>
			<View style={styles.container}>
				{gameInfo ? (
					<ScrollView contentContainerStyle={styles.scrollContent}>
						<View style={styles.imageWrapper}>
							<Image
								source={{ uri: gameInfo.img }}
								style={styles.gameImage}
								resizeMode="contain"
							/>
						</View>

						<Text style={styles.title}>{gameInfo.title}</Text>
						<Text style={styles.description}>{gameInfo.description}</Text>

						<View style={styles.scoreContainer}>
							<Score score={gameInfo.score} maxScore={100} />
						</View>

						{gameInfo.reviews.length > 0 ? (
							<View style={styles.reviewsContainer}>
								<Text style={styles.reviewsTitle}>Reseñas:</Text>
								{gameInfo.reviews.map((review, index) => (
									<View key={index} style={styles.review}>
										<Text style={styles.reviewAuthor}>
											{review.author || "Anónimo"}
										</Text>
										<Text style={styles.reviewQuote}>
											{review.quote || "Sin reseña detallada."}
										</Text>
										<Text style={styles.reviewPublication}>
											{review.publicationName || "Fuente desconocida"} -{" "}
											{review.date || "Fecha desconocida"}
										</Text>
									</View>
								))}
							</View>
						) : (
							<Text style={styles.noReviewsText}>
								No hay reseñas disponibles para este juego.
							</Text>
						)}
					</ScrollView>
				) : (
					<ActivityIndicator size="large" color="#007bff" />
				)}
			</View>
		</Screen>
	);
}

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1a202c",
		padding: 16,
	},
	scrollContent: {
		flexGrow: 1,
		paddingBottom: 20,
	},
	imageWrapper: {
		width: "100%",
		alignItems: "center",
		marginBottom: 16,
	},
	gameImage: {
		width: "100%",
		aspectRatio: 16 / 9,
		borderRadius: 8,
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		color: "white",
		marginBottom: 8,
	},
	description: {
		fontSize: 16,
		color: "#d1d5db",
		marginBottom: 16,
	},
	scoreContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
	},
	reviewsContainer: {
		backgroundColor: "#2d3748",
		padding: 16,
		borderRadius: 8,
	},
	reviewsTitle: {
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
		marginBottom: 8,
	},
	review: {
		marginBottom: 16,
	},
	reviewAuthor: {
		fontSize: 16,
		color: "#fbbf24",
		fontWeight: "bold",
	},
	reviewQuote: {
		fontStyle: "italic",
		color: "#d1d5db",
		marginBottom: 4,
	},
	reviewPublication: {
		fontSize: 12,
		color: "#9ca3af",
	},
	noReviewsText: {
		color: "#9ca3af",
		fontStyle: "italic",
	},
});
