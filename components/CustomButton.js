import reactDom from 'react-dom';
import { Text, Pressable, TouchableOpacity, StyleSheet, Button, View} from 'react-native'; 


  const CustomButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
	  <Text style={styles.appButtonText}>{title}</Text>
	</TouchableOpacity>
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