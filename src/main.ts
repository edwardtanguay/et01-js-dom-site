import { showBooks } from './components/books';
import './style.scss';

(async () => {
	const response = await fetch(
		'https://edwardtanguay.vercel.app/share/techBooks.json'
	);
	const books = await response.json();

	document.querySelector('#app')!.innerHTML = `
	<div>
		<h2>Tech Books</h2>
		${showBooks(books)}
	</div>
`;
})();
