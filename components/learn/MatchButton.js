import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

const MatchButton = ({text = "ButtonText", link, onPress, disabledHere = false, term}) => (

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
        
        <Text style={[
            {
                color: disabledHere
                ? 'transparent'
                : '#B6C5D4'
            },
            styles.text,
            term && {fontSize:20, color:"white"}
        ]}> {text}
        </Text>
	</Pressable>
);

const styles = StyleSheet.create({
	container:{
        borderWidth: 3,
		//borderColor: '#324A60',
		borderRadius: 16,
		padding: 16,
        //flexDirection: 'wrap',
        width: 170,
        height:90,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        textAlign: "center",
        fontWeight:"600",
        fontSize:15,
        margin: "auto",
    },
});

export default MatchButton;