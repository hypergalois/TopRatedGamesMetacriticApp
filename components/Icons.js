import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const HomeIcon = (props) => (
	<Feather name="home" size={24} color="white" {...props} />
);

const CircleInfoIcon = (props) => (
	<FontAwesome name="info-circle" size={24} color="white" {...props} />
);

const InfoIcon = (props) => (
	<Feather name="info" size={24} color="black" {...props} />
);

export { HomeIcon, CircleInfoIcon, InfoIcon };
