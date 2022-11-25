import { showBook} from './book';
import { IBook } from '../interfaces';

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
