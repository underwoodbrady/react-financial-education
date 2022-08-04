import { Text, View, StyleSheet, ImageBackgroundComponent } from "react-native";

const LeaderboardTab = ({i, color, text, xp, special}) => (
    <View style={[styles.container, special && {backgroundColor:"#69ABE6", marginTop:16}]}>
        <Text style={[styles.number, special && {color:"white"}]}>{i}</Text>
        <View style={[styles.icon, {backgroundColor:color}]}></View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.xp}>{xp}xp</Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        padding:8,
        paddingHorizontal:12,
        borderRadius:8,
        marginBottom:6, //BAD PRACTICE SHOULD REMOVE
    },
    number:{
        color: "#69ABE6",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "left",
        marginBottom: 8,
    },
    icon:{
        width:30,
        height:30,
        borderRadius:25,
        marginLeft:16,
    },
    text:{
        color: "white",
        fontSize: 18,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 8,
        flexGrow:1,
        marginLeft:16,
    },
    xp:{
        color: "#D4DFEA",
        fontSize: 18,
        textAlign: "right",
        marginBottom: 8,

    }
});

export default LeaderboardTab;
