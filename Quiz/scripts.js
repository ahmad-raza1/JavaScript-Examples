const questions = [
	{
		question: "What is 10 + 10?",
		options: ["8", "20", "28", "38"],
		answer: "20"
	},
	{
		question: "What is Athena's favorite animal?",
		options: ["jellyfish", "penguins", "otters"],
		answer: "otters"
	}
];

let correct = 0;

document.addEventListener("DOMContentLoaded", () => {

	for (var i = 0; i < questions.length; i++) {
		console.log(questions[i]);
		//load_question(i);
	
	}

	load_question(0);


});

function load_question(question_number) {
	document.querySelector('#question').innerHTML = questions[question_number].question;
	const options = document.querySelector('#options');
	options.innerHTML = "";

	for (const option of questions[question_number].options) {
		console.log(option);
		options.innerHTML += `<button class="option">${option}</button>`;
	}

	document.querySelectorAll('.option').forEach(option => {
		option.onclick = () => {
			alert(option.textContent);

		}
	});


}
