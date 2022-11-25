import './style.scss';

// get books
(async () => {
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
					<img src="https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg"/>
					<div class="info">
						<div class="title">${book.title}</div>
						<div class="description">${book.description}</div>
					</div>
				</div>
				`;
				})
				.join('')}
		</div>
	</div>
`;
})();
