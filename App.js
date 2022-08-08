import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/RootStack';

const navTheme = DefaultTheme;
navTheme.colors.background = '#01101B';
navTheme.colors.text = 'white';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

//This is a great fill color #122533

export default function App() {
	return (
		<Provider store={Store}>
			<NavigationContainer theme={navTheme}>
				<RootStack />
			</NavigationContainer>
		</Provider>
	);
}
