import { StyleSheet, View, Text } from "react-native";

import Panel from "../../components/introduction/Panel";
import DotDotDot from "../../components/introduction/DotDotDot";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const MockPanelData=[
    {title:"Learn Active Investing Through Active Learning", image:require('../../assets/intro-graph.png')},
    {title:"Feel More Confident in your Spending Habits", image:require('../../assets/intro-piggy.png')},
    {title:"Look at This Graph; It Gives you Confidence", image:require('../../assets/intro-graph2.png')},
    {title:"Rest Easy Knowing your Data is Safe and Secure", image:require('../../assets/intro-safe.png')},
];

const Introduction = () => {
    const [panelActive, setPanelActive] = useState(0);
    const nav = useNavigation();

    useEffect(()=>{
        const dotAnim = setInterval(()=>{
            if(panelActive>=3) setPanelActive(0);
            else setPanelActive(panelActive+1);
        },3000)
        return () => clearInterval(dotAnim);
    },[panelActive, setPanelActive])

    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <Panel title={MockPanelData[panelActive].title} image={MockPanelData[panelActive].image}/>
            </View>
            <View style={styles.dots}>
                <DotDotDot
                    dots={[
                        panelActive === 0,
                        panelActive === 1,
                        panelActive === 2,
                        panelActive === 3,
                    ]}
                />
            </View>
            <ButtonPrimary onPress={()=>nav.navigate("AppSignIn")} text="Get Started"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    panel: {
        marginBottom: 48,
    },
    dots: {
        marginBottom: 72,
    },
});

export default Introduction;
