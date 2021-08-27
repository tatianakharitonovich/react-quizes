import classes from './ActiveQuiz.module.css';
import AnswerList from './AnswerList/AnswerList';

const ActiveQuiz = props => {
	return (
		<div className={classes.ActiveQuiz}>
			<p className={classes.Question}>
				<span>
					<strong>{props.questionNumber}.</strong>&nbsp;
					{props.question}
				</span>
				<small>{props.questionNumber} из {props.quizLength}</small>
			</p>
			<AnswerList	
				answers={props.answers}
				onAnswerClicked ={props.onAnswerClicked}
				state = {props.state}

			/>		
		</div>

		)
}

export default ActiveQuiz;