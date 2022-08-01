import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/RootStack';

const navTheme = DefaultTheme;
navTheme.colors.background="#01101B";
navTheme.colors.text="white";

//This is a great fill color #122533

export default function App() {
	return (
		<NavigationContainer
		theme={navTheme}>
			<RootStack />
		</NavigationContainer>
	);
}

