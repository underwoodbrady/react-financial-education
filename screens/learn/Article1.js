import { StyleSheet, View } from 'react-native';

import Article from './Article';

import HeaderText from '../../components/text/HeaderText';
import SubheaderText from '../../components/text/SubheaderText';
import ParagraphText from '../../components/text/ParagraphText';
import ListText from '../../components/text/ListText';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { completedObjective, increaseCoins } from '../../redux/actions';

const ArticleOne = () => {
	const nav = useNavigation();
	const dispatch = useDispatch();
	return (
		<Article onPressContinue={() => {
			dispatch(completedObjective(0,0));
			dispatch(increaseCoins(2));
			nav.goBack();
		}}>
			<HeaderText text="Budgeting: 50/30/20 Rule" />
			<ParagraphText text="The recommended way to budget your money is by using the 50/30/20 rule. This means spending 50% of your income on needs, 30% on wants, and 20% is saved or used to repay debt. Some expenses that should be included in needs are housing, groceries, utilities, transportation, and insurance. Expenses that can be included in wants are entertainment, gifts, dining, and vacation." />
			<SubheaderText text="The 20%" style={{ marginVertical: 8 }} />
			<ParagraphText text="The final 20% should include saving. This can be anything from an IRA, 401K, or a college fund for children. Any outstanding debt that needs to be repaid should also be included in this 20%. Overall, a person’s wants and needs will constantly vary and it may continue to change the budgeting plan. Using the 50/30/20 rule as a general guideline is a good way to budget your money long term, and ensure that you are spending your income appropriately." />
			<ParagraphText text="Maecenas ut mauris vitae nisl luctus euismod et at justo. Nullam dignissim dignissim consectetur. Curabitur bibendum, leo vel cursus vehicula, urna massa viverra felis, vitae gravida quam risus sit amet nisl. Nam id nunc consectetur neque commodo lobortis a a leo." />
			<ListText text="Maecenas mollis commodo felis" listNum={1} />
			<ListText
				text="Vivamus ut elit quis sem viverra viverra"
				listNum={2}
			/>
			<ListText text="Ut eu maximus orci, a tempor nibh" listNum={3} />
			<ParagraphText
				text="Quisque ornare orci et dolor sagittis, sit amet hendrerit massa porta. Sed nec mi arcu. Etiam eu varius sem. Aliquam molestie gravida risus, eget volutpat odio auctor vel. Maecenas eleifend eros luctus, feugiat ante ac, elementum felis. Sed dictum nisl diam, vel fermentum tortor condimentum quis."
				style={{ paddingBottom: 64 }}
			/>
		</Article>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default ArticleOne;
