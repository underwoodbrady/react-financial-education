import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

const QuizButton = ({text = "ButtonText", icon, onPress}) => (
	<Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? '#122533'
            : 'transparent'
        },
        styles.container
      ]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
	</Pressable>
);

const styles = StyleSheet.create({
	container:{
    width:360,
    borderWidth: 2,
		borderColor: '#324A60',
		borderRadius: 16,
		padding: 16,
    justifyContent: "flex-end",
    alignItems:"center",
    },
    text:{
        color:"white",
        textAlign: "center",
        fontWeight:"600",
        fontSize:15,
    }
});

export default QuizButton;