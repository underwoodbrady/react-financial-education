import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert, Image} from 'react-native';
import CustomText from '../components/CustomText';

const Invest = () => (
	<View style={styles.invest}>
		<CustomText>Invest</CustomText>
		<Text>Hello there!</Text>
		<StatusBar style="auto" />
		<Button
        title="Press me"
        onPress={() => Alert.alert('Thanks for clicking me!')}
      />
	  <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
	</View>

);

const styles = StyleSheet.create({
	invest: {
		flex: 1,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Invest;
