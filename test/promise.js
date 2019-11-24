const prom1 = () => new Promise();
const prom2 = () => new Promise();

export function func() {
	return prom1().then(() => {
		return prom2().then(() => null);
	});
}
