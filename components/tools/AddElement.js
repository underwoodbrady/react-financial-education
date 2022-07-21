import { Text, View, Image, StyleSheet,Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 


const AddElement = ({text, onPress}) => (
	<Pressable style={styles.container} onPress={()=> onPress}>
        <Ionicons style={styles.icon} name="add-circle-outline" size={24} color="white" />
        <Text style={styles.text}>{text}</Text>
	</Pressable>
);

const styles = StyleSheet.create({
	container: {
        alignItems:"center",
	},
    icon:{
        marginTop:16,
    },
    text:{
        color:'white',
        marginBottom:16,
        marginTop:4,
    }
});

export default AddElement;
