import { Text, View, StyleSheet } from "react-native";

const DotDotDot = ({dots}) => (
    <View  style={styles.container}>
        {dots.map((dot)=>(
            <View style={[styles.dot, dot && styles.dotFilled]} key={Math.random()}></View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
    },
    dot:{
        width:14,
        height:14,
        backgroundColor:"#516578",
        borderRadius:100,
        marginHorizontal:8,
    },
    dotFilled:{
        backgroundColor:"#69ABE6",
    }
});

export default DotDotDot;
