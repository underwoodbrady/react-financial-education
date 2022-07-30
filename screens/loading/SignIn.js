import { StyleSheet, View, Text } from 'react-native';



const SignIn = () => (
	<View style={styles.container}>
        <Text>Sign in</Text>
	</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SignIn;
