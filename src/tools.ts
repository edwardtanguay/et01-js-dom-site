/**
 * Capitalize the first letter of a string.
 *
 * tools.capitalizeFirstLetter("this is a sentence.");
 *
 * "This is a sentence."
 */
export const capitalizeFirstLetter = (line: string) => {
	return line.charAt(0).toUpperCase() + line.slice(1);
}