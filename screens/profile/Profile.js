import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import CustomText from '../../components/CustomText';
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = () => (
	<View style={styles.container}>
		<CustomText>Profile</CustomText>
		<View style={styles.profileCircle}>
			<FontAwesome5 name="dog" size={64} style={styles.profileIcon}/>
			<Text style={styles.profileTitle}>Guest</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileCircle:{
		backgroundColor:"#6EC6FF",
		width:150,
		height:150,
		borderRadius:100,
		justifyContent:"center",
		alignItems:"center",
	},
	profileIcon:{
		color:"#0D7ABB",
	},
});

export default Profile;
