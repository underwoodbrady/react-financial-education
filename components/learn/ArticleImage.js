import { Image, View, StyleSheet } from "react-native";

const ArticleImage = ({image, style = {}}) => (
    <View style={[styles.container, style]}>
        <Image source={image || require("../../assets/collegeloans.jpg")} style={styles.image}/>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        flexDirection:"row",
        marginBottom:32,
        marginTop:16,
    },
    image:{
        width:320,
        height:180,
        borderWidth:3,
        borderColor:"white",
    },
});

export default ArticleImage;
