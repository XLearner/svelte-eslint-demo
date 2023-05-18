import App from './App.svelte';

console.log('test')

new App({
	target: document.body,
	props: {
		name: 'world',
		age: '12355',
	}
});

export function main() {
	console.log('test')


}



// export default app;