import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

const IconButton = ({label, icon, onPress}) => (
    <Pressable onPress={onPress} style={styles.container}>
        <FontAwesome5 name={icon} size={18} color="white" />
        <Text style={styles.labelText}>{label}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
    },
    labelText:{
        color:"white",
        marginLeft:16,
        fontSize:16,
    }
});

export default IconButton;
