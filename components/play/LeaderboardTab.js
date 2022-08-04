import { Text, View, StyleSheet, ImageBackgroundComponent } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 


const LeaderboardTab = ({i, color, text, xp, special, crown}) => (
    <View style={[styles.container, special && {backgroundColor:"#69ABE6", marginTop:16}]}>
        <Text style={[styles.number, special && {color:"white"}]}>{i}</Text>
        <View style={[styles.icon, {backgroundColor:color}]}></View>
        <Text style={styles.text}>{text}{"   "}{crown && <FontAwesome5 name="crown" size={20} color="#FFE563" style={styles.crown} />}</Text>
        <Text style={styles.xp}>{xp}xp</Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
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
    crown:{
    },
    xp:{
        color: "#D4DFEA",
        fontSize: 18,
        textAlign: "right",
        marginBottom: 8,

    }
});

export default LeaderboardTab;
