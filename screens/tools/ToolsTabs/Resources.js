import { StyleSheet, View, ScrollView } from "react-native";

import SubheaderText from "../../../components/text/SubheaderText";
import ParagraphText from "../../../components/text/ParagraphText";
import Resource from "../../../components/tools/Resource";

const Resources = () => {
    return (
        <View style={styles.container}>
            <SubheaderText text="External Resources" />
            <ParagraphText
                text="Here are some of our favorite resources:"
                style={{ marginBottom: 12 }}
            />
            <View style={styles.center}>
                <View style={styles.space}>
                    <Resource
                        title="Investment planning tool"
                        description="Free tool by Company A"
                    />
                </View>
                <View style={styles.space}>
                    <Resource
                        title="How to open savings account"
                        description="Free article by Company B"
                        icon="browser"
                    />
                </View>
                <View style={styles.space}>
                    <Resource
                        title="Active vs. Passive investing"
                        description="Free video by Company C"
                        icon="video"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical:16,
    },
    center: {
        alignItems: "center",
    },
    space:{
        marginBottom:20,
    },
});

export default Resources;
