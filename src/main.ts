import { getBooks, showBooks } from './components/books';
import './style.scss';
import { IBook } from './interfaces';

(async () => {
	let html = '';
	try {
		const books: IBook[] = await getBooks();
		html = `
			<div>
				<h2>Tech Books</h2>
				${showBooks(books)}
			</div>
		`;
	}
	catch (e: any) {
		html = `Error fetching books ("${e.message}")`;
	}
	document.querySelector('#app')!.innerHTML = html;
})();
