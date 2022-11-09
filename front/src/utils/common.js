export const getBooleanText = (bool) => (bool ? 'YES' : 'NO');

export const sleep = (ms) => (
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, ms);
	})
);
