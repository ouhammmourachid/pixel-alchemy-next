import { formatDistanceToNow} from 'date-fns';
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

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

export function formatDateFns(dateString) {
    // Parse the ISO date string to a JavaScript Date object
    const date = parseISO(dateString);

    // Format the date using the desired format string
    const formattedDate = format(date, "dd MMM yyyy");
    return formattedDate;
  }