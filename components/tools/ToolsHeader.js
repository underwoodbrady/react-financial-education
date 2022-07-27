import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import SmallButton from '../SmallButton';
import { useState, useEffect} from 'react';

const ToolsHeader = ({ tabs, selectedTab, setSelectedTab }) => {
	return (
		<View style={styles.container}>
			{tabs.map((tab, i) => (
				<View style={styles.separator} key={tab}>
					<SmallButton
						title={tab}
						isSelected={selectedTab == i}
						onPress={() => setSelectedTab(i)}
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
