import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import CustomText from '../../components/CustomText';
import { FontAwesome5 } from '@expo/vector-icons';

import Information from '../../components/profile/Information';

const Profile = () => (
	<View style={styles.container}>
		<View style={styles.profileCircleOutline}>
			<View style={styles.profileCircle}>
				<FontAwesome5 name="dog" size={50} style={styles.profileIcon} />
			</View>
		</View>
		<Text style={styles.profileTitle}>Guest</Text>
		<Information label="Email" sublabel="brady.underwood@envestnet.com" icon="envelope"/>
		<Information label="Phone" sublabel="123-456-7890" icon="phone"/>
		<Information label="Learning Path" sublabel="College Saving" icon="graduation-cap"/>
		<View style={styles.updatePreferences}>
	<Text style={styles.buttonText}>Update Learning Path</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileCircleOutline: {
		width:150,
		height:150,
		borderWidth:5,
		borderRadius:100,
		borderColor:"#324A60",
		justifyContent:"center",
		alignItems: "center",
		marginBottom: 12,
	},
	profileCircle: {
		backgroundColor: '#6EC6FF',
		width: 130,
		height: 130,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileIcon: {
		color: '#0D7ABB',
	},
	profileTitle: {
		color: 'white',
		fontWeight: '600',
		fontSize: 20,
		marginBottom:16,
	},
	updatePreferences:{
		width:200,
		height:50,
		borderWidth:2,
		borderColor:"white",
		borderRadius:15,
		alignItems:"center",
		justifyContent:"center",
	},
	buttonText:{
		color:"white",
		fontWeight:"600",
	},
});

export default Profile;
