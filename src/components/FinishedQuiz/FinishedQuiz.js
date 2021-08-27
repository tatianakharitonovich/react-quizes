import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';


const FinishedQuiz = props => {
	let i=0;
	Object.values(props.results).map((item)=> 
		item ==='success'? i++ : i
	)

	return (
		<div className={classes.FinishedQuiz}>
			<ul>
				{ props.quiz.map((quizItem, index) => {
					const cls = [
					'fa', 
					props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
					classes[props.results[quizItem.id]],
					]

					return (
					<li key={index}>
						<strong> {index+1} </strong>&nbsp;
						{quizItem.question}
						<i className={cls.join(' ')} /> 
					</li>
					)
				})}
								
			</ul>
			<p>Правильно {i} из {props.quiz.length}</p>
			<Button onClick={props.onRetry} type="primary">Повторить</Button>
			<Link to='/quiz-list' ><Button type="success">Перейти в список тестов</Button></Link>
		</div>
	)
}

export default FinishedQuiz;