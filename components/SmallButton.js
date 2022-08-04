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
        borderColor: "#324A60",
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    isSelected: {
        backgroundColor:"#324A60",
        borderColor:"#324A60",
    },
    title:{
        color:"#D4DFEA",
        fontWeight: "500",
        fontSize:13,
    },
    isSelectedText:{
        color:"white",
    }
});

export default SmallButton;
