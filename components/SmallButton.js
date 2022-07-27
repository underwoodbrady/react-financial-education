import { Text, View, Image, StyleSheet, Pressable } from "react-native";


const SmallButton = ({title, onPress, isSelected}) => (
    <Pressable onPress={onPress} style={[styles.container, isSelected && styles.isSelected]}>
        <Text style={[styles.title, isSelected && styles.isSelectedText]}>{title}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    isSelected: {
        backgroundColor:"white",
    },
    title:{
        color:"white",
        fontWeight: "500",
        fontSize:13,
    },
    isSelectedText:{
        color:"#4099F2",
    }
});

export default SmallButton;
