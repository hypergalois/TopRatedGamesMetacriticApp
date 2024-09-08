import { HomeIcon } from "../../components/Icons";
import { Text, ScrollView, View, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Screen from "../../components/Screen";

function About() {
	return (
		<Screen>
			<ScrollView style={styles.scrollView}>
				{/* Sección de encabezado */}
				<View style={styles.header}>
					<Text style={styles.headerTitle}>Acerca de la App</Text>
					<Link asChild href="/">
						<Pressable>
							{({ pressed }) => (
								<HomeIcon
									style={[styles.homeIcon, { opacity: pressed ? 0.5 : 1 }]}
								/>
							)}
						</Pressable>
					</Link>
				</View>

				{/* Descripción */}
				<Text style={styles.description}>
					Esta aplicación te permite explorar los juegos mejor puntuados en
					Metacritic. Puedes ver una lista de los juegos con mayores
					puntuaciones y acceder a información detallada sobre cada uno, como su
					fecha de lanzamiento, descripción y calificaciones.
				</Text>
				<Text style={styles.description}>
					Con Expo y React Native, esta app demuestra cómo crear una experiencia
					móvil que muestre los juegos de manera atractiva y responsiva. Puedes
					navegar fácilmente por una lista de juegos y hacer clic en cualquiera
					de ellos para ver más detalles.
				</Text>

				{/* Enlace a GitHub */}
				<View style={styles.githubContainer}>
					<Text style={styles.githubText}>
						Puedes ver más de mi trabajo en GitHub:
					</Text>
					<Link href="https://github.com/hypergalois">
						<Pressable>
							{({ pressed }) => (
								<Text
									style={[styles.githubLink, { opacity: pressed ? 0.7 : 1 }]}
								>
									@hypergalois
								</Text>
							)}
						</Pressable>
					</Link>
				</View>

				{/* Información adicional */}
				<Text style={styles.additionalInfo}>
					Esta aplicación fue creada con el objetivo de demostrar la
					flexibilidad de Expo y React Native para crear aplicaciones móviles de
					alto rendimiento y con un diseño atractivo. Cuenta con navegación
					usando Expo Router, animaciones fluidas e integración con APIs
					externas.
				</Text>
			</ScrollView>
		</Screen>
	);
}

export default About;

const styles = StyleSheet.create({
	scrollView: {
		padding: 24, // equivalente a p-6
		paddingTop: 96, // equivalente a pt-24
		backgroundColor: "#1a202c", // bg-gray-900
	},
	header: {
		flexDirection: "row", // flex-row
		justifyContent: "space-between", // justify-between
		alignItems: "center", // items-center
		marginBottom: 24, // mb-6
	},
	headerTitle: {
		color: "white", // text-white
		fontSize: 24, // text-3xl
		fontWeight: "bold", // font-bold
	},
	homeIcon: {
		color: "white", // text-white
	},
	description: {
		color: "#d1d5db", // text-gray-300
		fontSize: 18, // text-lg
		marginBottom: 16, // mb-4
	},
	githubContainer: {
		backgroundColor: "#2d3748", // bg-gray-800
		padding: 16, // p-4
		borderRadius: 8, // rounded-lg
		marginTop: 24, // mt-6
	},
	githubText: {
		color: "#9ca3af", // text-gray-400
		fontSize: 16, // text-base
	},
	githubLink: {
		color: "#60a5fa", // text-blue-400
		fontSize: 18, // text-lg
		fontWeight: "600", // font-semibold
		marginTop: 8, // mt-2
	},
	additionalInfo: {
		color: "#9ca3af", // text-gray-400
		fontSize: 14, // text-sm
		marginTop: 24, // mt-6
	},
});
