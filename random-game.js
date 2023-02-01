'use-strict';

const randomGame = () => {
	let randomNumber;
	let counter = 0;
	const INTERVAL_ID = setInterval(() => {
		randomNumber = Math.random();
		++counter;
		console.log(`Current random number is --> ${randomNumber}`);

		if (randomNumber > 0.75) {
			console.log(counter);
			clearInterval(INTERVAL_ID);
		}
	}, 1000);
};

randomGame();
