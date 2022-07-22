import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

const MatchButton = ({text = "ButtonText", link, onPress}) => (
	<Pressable style = {styles.container}
			onPress= {() => nav.navigate(link)}
			backgroundColor={"blue"}
		>
			<Text style={styles.text}>{text}</Text>
    	</Pressable>
);

const styles = StyleSheet.create({
	container:{
        borderWidth: 2,
		borderColor: '#324A60',
		borderRadius: 16,
		padding: 16,
        //flexDirection: 'wrap',
        width: "33%"
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    text:{
        color:"white",
        textAlign: "center",
        fontWeight:"600",
        fontSize:15,
    },
});

export default MatchButton;