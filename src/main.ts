import './style.scss';

// get books
const response = await fetch(
	'https://edwardtanguay.vercel.app/share/techBooks.json'
);
const books = await response.json();

document.querySelector('#app')!.innerHTML = `
	<div>
		<h2>Tech Books</h2>
		<div class="books">
			${books
			.map((book: any) => {
				return `
				<div class="book">
					<div class="title">${book.title}</div>
				</div>
				`;
			})
			.join('')}
		</div>
	</div>
`;
