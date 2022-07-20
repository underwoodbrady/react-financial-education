import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import RootTab from './navigation/RootTab';

const navTheme = DefaultTheme;
navTheme.colors.background="#01101B";

export default function App() {
	return (
		<NavigationContainer
		theme={navTheme}>
			<RootTab />
		</NavigationContainer>
	);
}

