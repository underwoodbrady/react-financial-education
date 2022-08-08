import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../components/text/HeaderText';
import SubheaderText from '../../components/text/SubheaderText';
import ParagraphText from '../../components/text/ParagraphText';
import ListText from '../../components/text/ListText';

const Article = ({ children, onPressContinue }) => {
	const [scrollPos, setScrollPos] = useState(1);
	const [viewHeight, setViewHeight] = useState(100);
	const [offset, setOffset] = useState(0);
	return (
		<View style={styles.container}>
			<View
				style={[
					styles.progressBar,
					scrollPos > 0 &&
						viewHeight > 0 && {
							width:
								(scrollPos / (viewHeight - offset)) * 100 + '%',
						},
				]}
			></View>

			<View
				style={[
					styles.buttonContainer,
					scrollPos / (viewHeight - offset) > 0.9 && { opacity: 1 },
				]}
			>
				<ButtonPrimary text="Continue" onPress={onPressContinue} />
			</View>

			<ScrollView
				contentContainerStyle={{
					alignItems: 'center',
				}}
				onScroll={(e) => {
					setScrollPos(e.nativeEvent.contentOffset.y);
					setOffset(e.nativeEvent.layoutMeasurement.height);
				}}
				onLayout={(e) => {}}
			>
				<View
					style={styles.content}
					onLayout={(e) => {
						let { height } = e.nativeEvent.layout;
						setViewHeight(height);
					}}
				>
					{children}
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
		color: 'white',
		marginVertical: 24,
	},
	progressBar: {
		height: 4,
		width: '0%',
		backgroundColor: '#69ABE6',
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 26,
		alignSelf: 'center',
		opacity: 0,
		zIndex: 20,
	},
	buttonText: {
		textAlign: 'center',
		color: '#0A1E2D',
		fontWeight: '600',
		fontSize: 18,
	},
	content: {
		flex: 1,
		width: '100%',
		padding: 32,
	},
});

export default Article;
