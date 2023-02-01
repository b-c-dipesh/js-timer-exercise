'use-strict';

// select DOM elements
const randomGameStartBtn = document.querySelector('.random-game-start-btn');
const randomGameResults = document.querySelector('.random-game-results');

// display results in html
const displayGameResults = (randomNumber, count = '') => {
	// create a li element
	const li = document.createElement('li');

	// add result inside li element
	if (count) {
		li.innerText = `Current random number is --> ${randomNumber} and number of tries is --> ${count}`;
	} else {
		li.innerText = `Current random number is --> ${randomNumber}`;
	}

	// append li to results
	randomGameResults.append(li);
};

// randomGame logic
const randomGame = () => {
	let randomNumber;
	let counter = 0;
	const INTERVAL_ID = setInterval(() => {
		randomNumber = Math.random();
		++counter;
		displayGameResults(randomNumber);

		if (randomNumber > 0.75) {
			displayGameResults(randomNumber, counter);
			clearInterval(INTERVAL_ID);
			randomGameStartBtn.disabled = false;
		}
	}, 1000);
};

// add Event listener
randomGameStartBtn.addEventListener('click', (e) => {
	// clear any previous randomGame results if any
	randomGameResults.innerHTML = '';

	// disable the start game button until the game is finished
	randomGameStartBtn.disabled = true;

	// start randomGame
	randomGame();
});
