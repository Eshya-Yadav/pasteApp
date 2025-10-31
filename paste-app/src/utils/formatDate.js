export const FormatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};
