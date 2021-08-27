import classes from './AnswerList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = props => {
	return (
		<ul className={classes.AnswerList}>
			{ props.answers.map((answer, index) =>
				<AnswerItem 
					key={index}
					answer={answer}
					onAnswerClicked = {props.onAnswerClicked}
					state = {props.state ? props.state[answer.id] : null}

				/>
				
			)}

		</ul>

		)
}

export default AnswerList;