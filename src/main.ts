import { showBooks } from './components/books';
import './style.scss';

(async () => {
	const response = await fetch(
		'https://edwardtanguay.vercel.app/share/techBooks.json'
	);
	const rawBooks = await response.json();
	const books = rawBooks.map((rawBook:any) => {
		return {
			idCode: 'buildingMicroservices',
			title: 'ttt',
			description: 'ddd'
		}
	})

	document.querySelector('#app')!.innerHTML = `
	<div>
		<h2>Tech Books</h2>
		${showBooks(books)}
	</div>
`;
})();
