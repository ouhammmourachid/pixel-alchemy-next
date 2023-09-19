import { formatDistanceToNow } from 'date-fns';

export default function formatNumber(number) {
    if (number < 1000) {
        return number.toString(); // Less than 1000, no formatting needed
    } else if (number < 1000000) {
        return (number / 1000).toFixed(1) + 'K'; // Thousands
    } else {
        return (number / 1000000).toFixed(1) + 'M'; // Millions
    }
}


export function formatDateToRelative(dateString) {
  // Parse the input date string into a JavaScript Date object
  const date = new Date(dateString);

  // Format the date relative to the current date
  return formatDistanceToNow(date, { addSuffix: true });
}