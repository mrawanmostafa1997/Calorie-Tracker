export function getDateFromString(dateString) {
  const day = Number(dateString.split("-")[2]); // Convert to number, no need to add 1
  const month = Number(dateString.split("-")[1]) - 1; // Subtract 1 because months are 0-indexed
  const year = Number(dateString.split("-")[0]);

  const date = new Date(year, month, day);
  return date;
}
