import { Text, View, StyleSheet, Image, Pressable} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const AdvisorTab = ({onPressButton}) => (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <FontAwesome5 name="hands-helping" size={45} color= "#69ABE6" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>AdvisorConnect <MaterialCommunityIcons  style={{lineHeight: 5}} name="registered-trademark" size={10} color="white" /></Text>
                <Text style={styles.description}>
                    Browse financial advisors 
                    to see what they can offer!
                </Text>
            </View>
        </View>
        <Pressable style={styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>Find an Advisor Today</Text>
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

export default AdvisorTab;