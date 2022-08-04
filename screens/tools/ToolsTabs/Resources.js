import { StyleSheet, View, ScrollView } from "react-native";

import SubheaderText from "../../../components/text/SubheaderText";
import ParagraphText from "../../../components/text/ParagraphText";

const Resources = () => {
    return(
    <View style={styles.container}>
        <SubheaderText text="Here are some suggested resources you can use"/>
        <ParagraphText text="Click on the links... do it"/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:32,
    },
});

export default Resources;
