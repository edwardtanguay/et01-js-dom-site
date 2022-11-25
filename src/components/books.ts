import { showBook } from './book';
import { IBook } from '../interfaces';
import * as tools from '../tools';

export const showBooks = (books: IBook[]) => {
	return `
	<div class="books">
		${books
			.map((book: IBook) => {
				return showBook(book);
			})
			.join('')}
	</div>
`;
}

export const getBooks = async () => {
	return new Promise<IBook[]>((resolve, reject) => {
		(async () => {
			const response = await fetch(
				'https://edwardtanguay.vercel.app/share/techBooks.json'
			);
			if (response.status === 200) {
				const rawBooks = await response.json();
				const books: IBook[] = [];
				rawBooks.forEach((rawBook: any) => {
					const book: IBook = {
						idCode: rawBook.idCode,
						title: rawBook.title,
						description: rawBook.description,
						language: rawBook.language ? tools.capitalizeFirstLetter(rawBook.language) : 'English'
					};
					books.push(book);
				});
				resolve(books)
			} else {
				reject({message: 'server returned error ' + response.status})
			}
		})();
	})
}