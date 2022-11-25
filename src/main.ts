import { showBooks } from './components/books';
import './style.scss';
import { IBook } from './interfaces';

(async () => {
	const response = await fetch(
		'https://edwardtanguay.vercel.app/share/techBooks.json'
	);
	const rawBooks = await response.json();
	const books: IBook[] = [];
	rawBooks.forEach((rawBook: any) => {
		const book: IBook = {
			idCode: rawBook.idCode,
			title: rawBook.title,
			description: rawBook.description,
			language: rawBook.language ? rawBook.language : 'English'
		};
		books.push(book);
	});

	document.querySelector('#app')!.innerHTML = `
	<div>
		<h2>Tech Books</h2>
		${showBooks(books)}
	</div>
`;
})();
