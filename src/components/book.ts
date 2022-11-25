export const showBook =(book:any) => {
	return `
	<div class="book">
		<img src="https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg"/>
		<div class="info">
			<div class="title">${book.title}</div>
			<div class="description">${book.description}</div>
		</div>
	</div>
`;
}