import { Text, Pressable } from 'react-native'; 

const CustomButton = ({ children }) => (
    <Pressable class={styles.container} onPress={() => null}>
	    <Text class={styles.text}>{children}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
	container: {
		//Styling here
	},
	text: {
		
	},
});


export default CustomButton;