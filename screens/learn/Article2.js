import { StyleSheet, View } from 'react-native';

import Article from './Article';

import HeaderText from '../../components/text/HeaderText';
import SubheaderText from '../../components/text/SubheaderText';
import ParagraphText from '../../components/text/ParagraphText';
import ListText from '../../components/text/ListText';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { completedObjective } from '../../redux/actions';

const ArticleTwo = () => {
	const nav = useNavigation();
	const dispatch = useDispatch();
	return (
		<Article onPressContinue={() => {
			dispatch(completedObjective(1,0));
			nav.goBack();
		}}>
			<HeaderText text="Saving: College Loans" />
			<ParagraphText text="Students that are planning for college loans should be aware of the different options available to them. There are four federal options offered to students taking on college loans. The first option is Standard Repayment. This option allows students to repay over the course of 10 years with less interest. The second option is Income-driven Repayment. This ties your repayment amount to income as you pay a portion of your income over a 20 or 25 year span." />
			<SubheaderText
				text="Graduated Repayment"
				style={{ marginVertical: 8 }}
			/>
			<ParagraphText text="This is a better option for students who need a more manageable option, as all remaining debt after the 20/25 years is forgiven. The third option is Graduated Repayment. This plan offers lower monthly payments initially, and the amount you pay is increased every two years over the course of 10 years. The fourth option is Extended Repayment. " />
			<ParagraphText text=" This option starts with lower initial monthly payments, and payments increase every two years over the course of 25 years. Each option has different benefits and can fit people based on their goals and needs. The government offers a loan simulator which allows students to see what their payments would be with each plan. This allows students to see what plan best fits them. " />
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

export default ArticleTwo;
