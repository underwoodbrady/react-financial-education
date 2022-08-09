import { StyleSheet, View, Text, Image, Keyboard } from "react-native";

import InputBox from "../../components/introduction/InputBox";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const SignIn = () => {
	const nav = useNavigation();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			() => {
				setKeyboardVisible(true); // or some other action
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				setKeyboardVisible(false); // or some other action
			}
		);
		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	}, []);

    return(<View style={styles.container}>
        <View style={styles.mainContent}>
            <Image
                style={styles.image}
                source={require("../../assets/logo.png")}
            />
            <Text style={styles.title}>Sign in</Text>
            <View style={styles.input}>
                <InputBox placeholder="Username"/>
            </View>
            <View style={styles.input}>
                <InputBox placeholder="Password" secureTextEntry/>
            </View>
            <View style={styles.signInButton}>
                <ButtonPrimary text="Sign in" onPress={()=>nav.navigate("App")}/>
            </View>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </View>
        {!isKeyboardVisible && <View style={styles.footerContent}>
            <Text style={styles.footerText}>Sign in as advisor</Text>
            <View style={styles.footerSeparator}/>
            <Text style={styles.footerText}>Sign in as employee</Text>
        </View>}
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
    },
	mainContent:{
		flex: 1,
        justifyContent: "center",
        alignItems: "center",
	},
    image: {
        width: 275,
        height: 85.7,
        marginBottom: 52,
    },
    input: {
        marginVertical: 12,
    },
    title: {
        fontSize: 32,
        color: "white",
        marginBottom: 36,
    },
    signInButton: {
        marginTop: 24,
        marginBottom: 20,
    },
    forgotPassword: {
        color: "white",
        fontWeight: "300",
        fontSize: 14,
    },
    footerContent: {
        flexDirection: "row",
		alignItems: "center",
    },
    footerText: {
        color: "white",
        fontSize: 13,
		fontWeight: "300",
    },
	footerSeparator: {
		backgroundColor:"white",
		width:1,
		height:13,
		marginHorizontal:12,
	},
});

export default SignIn;
