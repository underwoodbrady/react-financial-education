import reactDom from 'react-dom';
import { Text, Pressable, TouchableOpacity, StyleSheet, Button, View} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';


  const CustomButton = ({ onPress, title }) => (
	<View>
		<Icon.Button
			name={"camera"}
			backgroundColor={"blue"}
			onPress={onPress}
			style={styles.appButton}
		>
			<Text style={styles.appButtonText}>{title}</Text>
    	</Icon.Button>
		<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
			<Text style={styles.appButtonText}>{title}</Text>
		</TouchableOpacity>
	</View>
  );

  const styles = StyleSheet.create({
	// ...
	appButtonContainer: {
	  elevation: 8,
	  backgroundColor: "#009688",
	  borderRadius: 10,
	  paddingVertical: 10,
	  paddingHorizontal: 12
	},
	appButtonText: {
	  fontSize: 18,
	  color: "#fff",
	  fontWeight: "bold",
	  alignSelf: "center",
	  textTransform: "uppercase"
	}
  });


export default CustomButton;