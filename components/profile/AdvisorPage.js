import { Text, View, StyleSheet, Pressable, Modal, Image } from 'react-native';
const lydianLogo = require("../../assets/lydian-logo.png");


const AdvisorPage = ({ label, subLabel, buttonText, modalVisible, onRequestClose, detailedDescription }) => {
    return (
        <View>
        <Text>Hi</Text>
    </View>
    );
};


const styles = StyleSheet.create({
	container: {
   
	},
    centeredView: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        zIndex:5,
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:"rgba(0,0,0,0.2)",
    },
    modalContainer:{
        backgroundColor: "#324A60",
        borderRadius: 15,
        padding: 24,
        width:280,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    labelText:{
        color:"white",
        fontSize:20,
        fontWeight:"700",
        marginBottom:8,
    },
    subLabelText:{
        color:"#D4DFEA",
        fontSize:16,
        fontWeight:"500",
        marginBottom:12,
    },
    closeButton:{
        width:"100%",
        backgroundColor:"#69ABE6",
        borderRadius:12,
        paddingVertical:8,
    },
    buttonText:{
        color:"white",
        textAlign:"center",
        fontSize:16,
        fontWeight:"500",
    }
});

export default AdvisorPage;