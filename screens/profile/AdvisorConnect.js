import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';

import TopicCheckbox from '../../components/profile/TopicCheckbox';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setPreferences } from '../../redux/actions';
import AdvisorProfile from '../../components/profile/AdvisorProfile';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import AdvisorPage from '../../components/profile/AdvisorPage';

const advisorData = [
    {
        name: 'Zoe',
        description: "I've been an advisor for over 20 years and love working with clients to help them grow their wealth!",
    },
    {
        name: 'Emily',
        description: 'I love working with people to help them learn more about their portfolios',
    },
    {
        name: 'Justin',
        description: 'My goal is to help clients understand the myriad of data that is available to them',
    },
    {
        name: 'Ashley',
        description: 'I love working with clients and helping them learn more about the financial tools available to them',
    },
    {
        name: 'Hyunwoo',
        description: "I'm passionate about providing resources to the less fortunate",
    },
    {
        name: 'James',
        description: 'I work with ultra high net worth clients',
    },
    {
        name: 'Matthew',
        description: 'I love meeting new people and exploring ways they can invest their money intelligently',
    }
];

const AdvisorConnect = () => {
	const nav = useNavigation();
    

	return (
		<View style={styles.container}>
			<View>
				<Pressable
					onPress={() => nav.goBack()}
					style={styles.xButtonContainer}
					hitSlop={{
						bottom: 25,
						left: 25,
						right: 25,
						top: 25,
					}}
					pressRetentionOffset={{
						bottom: 50,
						left: 50,
						right: 50,
						top: 50,
					}}
				>
					<View>
						<Feather
							name="x"
							size={20}
							color="white"
							style={styles.xButton}
						/>
					</View>
				</Pressable>
				<Text style={styles.headerText}>AdvisorConnect </Text>
                <Text style={styles.subHeaderText}>powered by Envestnet</Text>
				<Text style={styles.subHeaderText}>
                    <Octicons name="search" size={24} color="white" />
                     ______________     Search
				</Text>
                <Text style={styles.subHeaderText}>
					Filter
                    <MaterialCommunityIcons name="table-search" size={24} color="white" />
				</Text>
                <ScrollView>
                {advisorData.map(
                            (advisorData) => (
                                <View>
                                    <AdvisorProfile onPressButton={() => nav.navigate("Advisor Page")} description={advisorData.description} 
                                    name ={advisorData.name}></AdvisorProfile>
                                </View>
                            )
                        )}
                    <Text>,</Text>
                    <Text>,</Text>
                    <Text>,</Text>
                    <Text>,</Text>
                    <Text>,</Text>
                    <Text>,</Text>
                    <Text>,</Text>
                    <Text>,</Text>
                    <Text>,</Text>
                </ScrollView>
			</View>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 32,
		paddingVertical: 64,
		justifyContent: 'space-between',
		flex: 1,
	},
	headerText: {
		color: 'white',
		fontSize: 26,
		fontWeight: '500',
		textAlign: 'left',
		marginBottom: 8,
	},
	subHeaderText: {
		color: '#D4DFEA',
		fontSize: 16,
		textAlign: 'left',
		marginBottom: 36,
	},
	button: {
		width: '100%',
		height: 40,
		borderRadius: 15,
		backgroundColor: '#69ABE6',
		justifyContent: 'center',
		alignItems: 'center',
	},
	spaceCheckbox: {
		marginVertical: 4,
	},
	xButtonContainer: {
		position: 'absolute',
		padding: 8,
		top: 8,
		right: 0,
		zIndex: 100,
	},
	buttonText: {
		color: '#01101B',
		fontWeight: '700',
		fontSize: 15,
	},
});

export default AdvisorConnect;
