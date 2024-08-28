import { format, parse,differenceInMonths } from 'date-fns';


// Define the predefined formats with specific keys
const PREDEFINED_FORMATS: Record<string, string> = {
  short: 'MM/dd/yyyy',
  long: 'MMMM do, yyyy',
  iso: 'yyyy-MM-dd',
  full: 'EEEE, MMMM do, yyyy',
  // Add more predefined formats as needed
};

/**
 * Formats a date string from one format to another, supporting predefined and custom formats.
 *
 * @param {string} dateStr - The date string to format.
 * @param {string} fromFormat - The format of the input date string.
 * @param {keyof typeof PREDEFINED_FORMATS | string} toFormatKeyOrCustom - The key for a predefined format or a custom format string.
 * @returns {string} - The formatted date string.
 * 
 * @example
 * // Using a predefined format
 * const formattedDate = formatDate('03/12/2005', 'MM/dd/yyyy', 'long');
 * console.log(formattedDate); // Outputs: "March 12th, 2005"
 * 
 * @example
 * // Using a custom format
 * const customFormattedDate = formatDate('2024-08-28', 'yyyy-MM-dd', 'dd/MM/yyyy');
 * console.log(customFormattedDate); // Outputs: "28/08/2024"
 * 
 * @example
 * // Using ISO format
 * const isoFormattedDate = formatDate('08/28/2024', 'MM/dd/yyyy', 'iso');
 * console.log(isoFormattedDate); // Outputs: "2024-08-28"
 */
function formatDate(
  dateStr: string, 
  fromFormat: string, 
  toFormatKeyOrCustom: keyof typeof PREDEFINED_FORMATS | string
): string {
  const toFormat = PREDEFINED_FORMATS[toFormatKeyOrCustom] || toFormatKeyOrCustom;
  const parsedDate = parse(dateStr, fromFormat, new Date());
  return format(parsedDate, toFormat);
}


export function calculateExperience(startDate: Date) {
  const currentDate = new Date();
  const monthsDifference = differenceInMonths(currentDate, startDate);
  const years = Math.floor(monthsDifference / 12);
  const months = monthsDifference % 12;
  return (years + months / 12).toFixed(1);
}

export default formatDate;
