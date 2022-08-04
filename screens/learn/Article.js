import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";

import HeaderText from "../../components/text/HeaderText";
import SubheaderText from "../../components/text/SubheaderText";
import ParagraphText from "../../components/text/ParagraphText";
import ListText from "../../components/text/ListText";

const Article = () => {
    const [scrollPos, setScrollPos] = useState(1);
    const [viewHeight, setViewHeight] = useState(100);
    const [offset, setOffset] = useState(0);
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.progressBar,
                    scrollPos > 0 &&
                        viewHeight > 0 && {
                            width:
                                (scrollPos / (viewHeight - offset)) * 100 + "%",
                        },
                ]}></View>

            <View
                style={[
                    styles.buttonContainer,
                    scrollPos / (viewHeight - offset) > 0.9 && { opacity: 1 },
                ]}>
                <ButtonPrimary text="Continue" onPress={()=> nav.goBack()}/>
            </View>

            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                }}
                onScroll={(e) => {
                    setScrollPos(e.nativeEvent.contentOffset.y);
                    setOffset(e.nativeEvent.layoutMeasurement.height);
                }}
                onLayout={(e) => {}}>
                <View
                    style={styles.content}
                    onLayout={(e) => {
                        let { height } = e.nativeEvent.layout;
                        setViewHeight(height);
                    }}>
                    <HeaderText text="Lorem Ipsum"/>
                    <ParagraphText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tincidunt sem. Donec gravida elit convallis, lacinia tellus a, dictum nunc. Fusce nec turpis ipsum. Vestibulum sapien leo, tincidunt ut tempus ornare, vestibulum non sem. Integer rutrum posuere sem a dignissim. Morbi sed metus massa. Pellentesque ullamcorper elit odio, sit amet sollicitudin lacus condimentum vel. Donec ornare est id massa finibus, sit amet fermentum tortor imperdiet."/>
                    <SubheaderText text="Quisque Condimentum" style={{marginVertical:8}}/>
                    <ParagraphText text="Nunc ac odio dictum, venenatis nibh nec, luctus ligula. Nunc ullamcorper sollicitudin convallis. Pellentesque ac purus vel ante dignissim ullamcorper eget non justo. Praesent odio lectus, bibendum vitae rutrum vel, pretium ut massa. "/>
                    <ParagraphText text="Maecenas ut mauris vitae nisl luctus euismod et at justo. Nullam dignissim dignissim consectetur. Curabitur bibendum, leo vel cursus vehicula, urna massa viverra felis, vitae gravida quam risus sit amet nisl. Nam id nunc consectetur neque commodo lobortis a a leo."/>
                    <ListText text="Maecenas mollis commodo felis" listNum={1}/>
                    <ListText text="Vivamus ut elit quis sem viverra viverra" listNum={2}/>
                    <ListText text="Ut eu maximus orci, a tempor nibh" listNum={3}/>
                    <ParagraphText text="Quisque ornare orci et dolor sagittis, sit amet hendrerit massa porta. Sed nec mi arcu. Etiam eu varius sem. Aliquam molestie gravida risus, eget volutpat odio auctor vel. Maecenas eleifend eros luctus, feugiat ante ac, elementum felis. Sed dictum nisl diam, vel fermentum tortor condimentum quis." style={{paddingBottom:64}}/>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "white",
        marginVertical: 24,
    },
    progressBar: {
        height: 4,
        width: "0%",
        backgroundColor: "#69ABE6",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 26,
        alignSelf: "center",
        opacity: 0,
        zIndex:20,
    },
    buttonText: {
        textAlign: "center",
        color: "#0A1E2D",
        fontWeight: "600",
        fontSize: 18,
    },
    content: {
        flex: 1,
        width:"100%",
        padding:32,
    },
});

export default Article;
