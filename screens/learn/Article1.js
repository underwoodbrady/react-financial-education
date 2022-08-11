import { StyleSheet, View } from 'react-native';

import Article from './Article';

import HeaderText from '../../components/text/HeaderText';
import SubheaderText from '../../components/text/SubheaderText';
import ParagraphText from '../../components/text/ParagraphText';
import ListText from '../../components/text/ListText';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { completedObjective, increaseCoins } from '../../redux/actions';
import ArticleImage from '../../components/learn/ArticleImage';

const ArticleOne = () => {
	const nav = useNavigation();
	const dispatch = useDispatch();
	const articleImage = require("../../assets/financialgoals.jpg");
	return (
		<Article onPressContinue={() => {
			dispatch(completedObjective(0,0));
			dispatch(increaseCoins(2));
			nav.goBack();
		}}>
			<ArticleImage image={articleImage}/>
			<HeaderText text="Budgeting: 50/30/20 Rule" />
			<ParagraphText text="The recommended way to budget your money is by using the 50/30/20 rule. This means spending 50% of your income on needs, 30% on wants, and 20% is saved or used to repay debt. Some expenses that should be included in needs are housing, groceries, utilities, transportation, and insurance. Expenses that can be included in wants are entertainment, gifts, dining, and vacation." />
			<SubheaderText text="The 20%" style={{ marginVertical: 8 }} />
			<ParagraphText text="The final 20% should include saving. This can be anything from an IRA, 401K, or a college fund for children. Any outstanding debt that needs to be repaid should also be included in this 20%. Overall, a person’s wants and needs will constantly vary and it may continue to change the budgeting plan. Using the 50/30/20 rule as a general guideline is a good way to budget your money long term, and ensure that you are spending your income appropriately." />
			<ParagraphText text="Separating wants from needs can be difficult. In general, though, needs are essential for you to live and work. Typical wants include dinners out, gifts, travel and entertainment." />
			<ListText text="Every budget needs both wiggle room" listNum={1} />
			<ListText
				text="Maybe you forgot about an expense or one was bigger than you anticipated"
				listNum={2}
			/>
			<ListText text="Some money you're entitled to spend as you wish." listNum={3} />
			<ParagraphText
				text="It’s not always easy to decide. Are restorative spa visits (including tips for a massage) a want or a need? How about organic groceries? Decisions vary from person to person."
				style={{ paddingBottom: 64 }}
			/>
		</Article>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default ArticleOne;
