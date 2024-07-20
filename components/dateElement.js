export default (date) => {
  const dateElement = document.createElement("i");
  dateElement.classList.add("date");
  dateElement.innerHTML = date;
  return dateElement;
};
