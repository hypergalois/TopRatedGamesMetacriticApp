import {
	StyleSheet,
	View,
	FlatList,
	ActivityIndicator,
	Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import AnimatedGameCard from "./GameCard";
import Screen from "./Screen";

import { getLatestGames } from "../lib/metacritic";

function Main() {
	const [games, setGames] = useState([]);
	const [numColumns, setNumColumns] = useState(1);

	const updateNumColumns = () => {
		const screenWidth = Dimensions.get("window").width;
		if (screenWidth > 1200) {
			setNumColumns(3);
		} else if (screenWidth > 800) {
			setNumColumns(2);
		} else {
			setNumColumns(1);
		}
	};

	useEffect(() => {
		getLatestGames().then((data) => setGames(data));

		const subscription = Dimensions.addEventListener(
			"change",
			updateNumColumns,
		);
		updateNumColumns();

		return () => {
			subscription?.remove();
		};
	}, []);

	return (
		<Screen style={styles.screen}>
			{games.length === 0 ? (
				<ActivityIndicator size="large" color="#007bff" />
			) : (
				<FlatList
					key={numColumns}
					keyExtractor={(game) => game.slug}
					data={games}
					renderItem={({ item, index }) => (
						<View style={styles.cardWrapper}>
							<AnimatedGameCard game={item} index={index} />
						</View>
					)}
					contentContainerStyle={styles.scrollContainer}
					numColumns={numColumns}
					showsVerticalScrollIndicator={false}
				/>
			)}
		</Screen>
	);
}

export default Main;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#1a202c",
	},
	scrollContainer: {
		padding: 10,
	},
	cardWrapper: {
		flex: 1,
		margin: 10,
		maxWidth: "100%",
	},
	card: {
		backgroundColor: "#fff",
		borderRadius: 10,
		marginBottom: 20,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
	},
	cardContent: {
		padding: 15,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#343a40",
		marginBottom: 10,
	},
	description: {
		fontSize: 14,
		color: "#6c757d",
		marginBottom: 10,
	},
	releaseDate: {
		fontSize: 12,
		color: "#495057",
		marginBottom: 5,
	},
	score: {
		fontSize: 14,
		color: "#28a745",
		fontWeight: "bold",
	},
});
