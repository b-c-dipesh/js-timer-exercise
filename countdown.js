'use strict';

// select DOM elements
const countDownForm = document.querySelector('.countdown-form');
const countDownInput = document.querySelector('#countdown-input');
const countDownStartBtn = document.querySelector('.countdown-start-btn');
const countDownResults = document.querySelector('.countdown-results');

// display results in html
const printInScreen = (result) => {
	// create a li element
	const li = document.createElement('li');

	// add result inside the li element
	li.innerText = result;

	// append it to the results
	countDownResults.append(li);
};

// countDown logic
const countDown = (counter) => {
	const INTERVAL_ID = setInterval(() => {
		--counter;

		if (counter === 0) {
			printInScreen('DONE!');
			clearInterval(INTERVAL_ID);
			countDownInput.disabled = false;
			countDownStartBtn.disabled = false;
			return;
		}

		printInScreen(counter);
	}, 1000);
};

// intercept the form submission
countDownForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// clear previous countdown results if any
	countDownResults.innerHTML = '';

	// extract value from form input and parse it to int
	const countDownStartVal = parseInt(countDownInput.value);

	// disable the input field and button until the countdown is finished
	countDownInput.disabled = true;
	countDownStartBtn.disabled = true;

	// start countDown
	countDown(countDownStartVal);
});
