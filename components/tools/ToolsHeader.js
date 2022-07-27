import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import SmallButton from '../SmallButton';
import { useState, useEffect} from 'react';

const ToolsHeader = ({ tabs }) => {
	const [selectedTab, setSelectedTab] = useState(tabs[0]);
	return (
		<View style={styles.container}>
			{tabs.map((tab) => (
				<View style={styles.separator} key={tab}>
					<SmallButton
						title={tab}
						isSelected={selectedTab == tab}
						onPress={() => setSelectedTab(tab)}
					/>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	separator: {
		paddingHorizontal: 8,
	},
});

export default ToolsHeader;
