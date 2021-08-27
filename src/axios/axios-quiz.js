import axios from 'axios';

export default axios.create({
	baseURL: 'https://react-quiz-a263f-default-rtdb.europe-west1.firebasedatabase.app/'
})