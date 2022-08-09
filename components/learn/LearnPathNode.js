import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

const banks = require("../../assets/banks.png");
const home = require("../../assets/home.png");
const health = require("../../assets/health.png");
const money = require("../../assets/money.png");
const cardGraph = require("../../assets/card-graph.png");
const logs = require("../../assets/logs.png"); 

const treeEsg = require("../../assets/tree-esg.png"); //ESG
const donate = require("../../assets/donate.png"); //Retirement planning
const report = require("../../assets/report.png"); // Alternative investing
const house = require("../../assets/house.png"); // Home Saving
const growth = require("../../assets/growth.png"); // Agressive Growth
const shield = require("../../assets/shield.png"); // Personal Security
const bank = require("../../assets/bank.png"); // College Saving

const help = require("../../assets/help.png"); 

const LearnPathNode = ({
	text,
	image = help,
	color,
	disabled = false,
	onPress,
}) => {
	switch(text){
		case "Saving":
			image = banks;
			break;
		case "Health":
			image = health;
			break;
		case "Home":
			image = home;
			break;
		case "Inflation":
			image = money;
			break;
		case "Interest Rates":
			image = cardGraph;
			break;
		//Preferences options
		case "College Saving":
			text = "Saving";
			image = bank;
			break;
		case "Agressive Growth":
			text = "Agressive";
			image = growth;
			break;
		case "Alternative Investing":
			text = "Alternative";
			image = report;
			break;
		case "Buying First House":
			text = "Buying House";
			image = house;
			break;
		case "Retirement Planning":
			text = "Retirement";
			image = donate;
			break;
		case "Personal Security":
			text = "Security";
			image = shield;
			break;
		case "ESG (Investing for good)":
			text = "ESG";
			image = treeEsg;
			break;
	}
	return (
		<View style={styles.container}>
			<Pressable style={styles.outline} onPress={onPress}>
				<View
					style={[
						styles.circle,
						disabled && { backgroundColor: '#324A60' },
					]}
				>
					<Image
						style={[
							styles.circleImage,
							disabled && { tintColor: '#324A60' },
						]}
						source={image}
					/>
					{disabled && (
						<Image
							style={[
								styles.circleImage,
								{
									position: 'absolute',
									opacity: 0.25,
									top: 15,
								},
							]}
							source={image}
						/>
					)}
				</View>
				<View style={styles.outlineFilled}></View>
			</Pressable>
			<Text style={[styles.labelText, disabled && { color: '#324A60' }]}>
				{text}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		alignItems:"center"
	},
	outline: {
		width: 130,
		height: 130,
		borderRadius: 100,
		borderWidth: 10,
		borderColor: '#324A60',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		width: 95,
		height: 95,
		backgroundColor: '#69ABE6',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circleImage: {
		height: 55,
		width: 55,
		top: -2,
	},
	labelText: {
		color: 'white',
		textAlign: 'center',
		marginTop: 12,
		fontSize: 16,
		fontWeight: '500',
	},
});

export default LearnPathNode;
