import { Text, View, StyleSheet, Image, Pressable} from "react-native";

const LearningPreferences = ({onPressButton}) => (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image source={require("../../assets/graduation-cap.png")} style={{width:60, height:60}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Learning Preferences</Text>
                <Text style={styles.description}>
                    Set your preferences for individual
                    learning, games, and tools
                </Text>
            </View>
        </View>
        <Pressable style={styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>Update Learning Preferences</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: "#324A60",
        borderRadius: 16,
        width: "100%",
        paddingTop: 20,
        paddingBottom:24,
        paddingHorizontal:24,
        justifyContent: "center",
        alignItems: "center",
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:24,
    },
    textContainer:{
        paddingHorizontal:8,
        paddingLeft:16,
        flex:1,
    },
    title:{
        fontSize:20,
        color:"white",
        fontWeight:"500",
        marginBottom:8,
    },
    description:{
        color:"#B6C5D4",
    },
    button:{
        width:"100%",
        height:40,
        borderRadius:15,
        backgroundColor:"#69ABE6",
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText:{
        color:"#01101B",
        fontWeight:"700",
        fontSize:15,
    },
});

export default LearningPreferences;
