'use strict';

const countDown = (counter) => {
	const INTERVAL_ID = setInterval(() => {
		--counter;

		if (counter === 0) {
			console.log('DONE!');
			clearInterval(INTERVAL_ID);
			return;
		}

		console.log(counter);
	}, 1000);
};

countDown(20);
