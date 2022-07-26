import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

const MatchButton = ({text = "ButtonText", link, onPress, disabledHere = false}) => (

    <Pressable style={({ pressed }) => [
        {
            backgroundColor: pressed && !disabledHere
              ? '#324A60'
              : 'transparent'
          },
        {
          borderColor: !disabledHere
            ? '#324A60'
            : 'transparent'
        },
        styles.container
      ]} onPress={onPress} disabled = {disabledHere}>
        
        <Text style={() => [
            {
                color: !disabledHere
                ? 'white'
                : 'transparent'
            },
            styles.text
        ]}> {text}
        </Text>
	</Pressable>
    
    /*
	<Pressable style = {styles.container}
			onPress= {() => {onPress}}
			backgroundColor={"blue"}
		>
			<Text style={styles.text}>{text}</Text>
    	</Pressable> */
);

const styles = StyleSheet.create({
	container:{
        borderWidth: 2,
		//borderColor: '#324A60',
		borderRadius: 16,
		padding: 16,
        //flexDirection: 'wrap',
        width: "100%"
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    text:{
        color: 'white',
        textAlign: "center",
        fontWeight:"600",
        fontSize:15,
    },
});

export default MatchButton;