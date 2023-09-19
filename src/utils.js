export default function formatNumber(number) {
    if (number < 1000) {
        return number.toString(); // Less than 1000, no formatting needed
    } else if (number < 1000000) {
        return (number / 1000).toFixed(1) + 'K'; // Thousands
    } else {
        return (number / 1000000).toFixed(1) + 'M'; // Millions
    }
}