import { showBook} from './book';

export const showBooks =(books:any) => {
	return `
	<div class="books">
		${books
			.map((book: any) => {
				return showBook(book);
			})
			.join('')}
	</div>
`;
}
