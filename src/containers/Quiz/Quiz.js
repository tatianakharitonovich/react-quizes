import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import {connect} from 'react-redux'; 
import {fetchQuizId, quizAnswerClick, retryQuiz} from '../../store/actions/quiz'; 

class Quiz extends Component {
	
	componentDidMount () {
		this.props.fetchQuizId(this.props.match.params.id);
	}

	componentWillUnmount () {
		this.props.retryQuiz();
	}
	render () {
		return (
			<div className={classes.Quiz}>
				<div className={classes.QuizWrapper}>
					<h1>Ответьте на все вопросы</h1>

					{
						this.props.loading || !this.props.quiz
							? <Loader />
							:  this.props.isFinished 
								? <FinishedQuiz
									quiz = {this.props.quiz}
									results = {this.props.results}
									onRetry = {this.props.retryQuiz}
								/>
								: <ActiveQuiz 
									question = {this.props.quiz[this.props.activeQuestion].question}
									answers = {this.props.quiz[this.props.activeQuestion].answers}
									quizLength = {this.props.quiz.length}
									questionNumber = {this.props.activeQuestion+1}
									state = {this.props.answerState}
									onAnswerClicked = {this.props.quizAnswerClick}
								/>
					}

				</div>
			</div>
		)
	}
 }

function mapStateToProps(state) {
 return {
   	activeQuestion: state.quiz.activeQuestion,
	answerState: state.quiz.answerState,
	isFinished: state.quiz.isFinished,
	results: state.quiz.results,
	loading: state.quiz.loading,
	quiz: state.quiz.quiz,
 }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizId: Id => dispatch(fetchQuizId(Id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz()), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);