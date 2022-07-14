import reactDom from 'react-dom';
import { Text, Pressable, TouchableOpacity, StyleSheet, Button, View} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


  const CustomButton = ({ onPress, title, link }) => {

	const nav = useNavigation();
	return(
	<View>

		<Icon.Button
			onPress= {() => nav.navigate(link)} style={styles.appButtonContainer}
			name={"camera"}
			backgroundColor={"blue"}
		>
			<Text style={styles.appButtonText}>{title}</Text>
    	</Icon.Button>
		
		{/*
		<Icon.Button
			name={"camera"}
			backgroundColor={"blue"}
			onPress={onPress}
			style={styles.appButton}
		>
			<Text style={styles.appButtonText}>{title}</Text>
    	</Icon.Button>
		<TouchableOpacity onPress= {() => nav.navigate(link)} style={styles.appButtonContainer}>
			<Text style={styles.appButtonText}>{title}</Text>
	</TouchableOpacity> */}
	</View>
	)
  };

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